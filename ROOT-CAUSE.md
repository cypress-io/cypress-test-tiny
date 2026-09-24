# Root cause: cypress-io/cypress#34902

Rewriting `set-cookie` in a `cy.intercept()` response handler has no effect on the
browser's cookie jar when Chrome runs on the native CDP path.

The cause is which CDP call Cypress uses to resume the response. Cypress resumes a
response it did not otherwise modify with `Fetch.continueResponse`. Chrome applies the
modified headers from that call to what the page sees, but it does not re-run cookie
processing on them. The cookie the network service already stored from the wire
response stays as the origin sent it.

`Fetch.fulfillRequest` does update the cookie jar. Cypress only uses it when an
intercept changed the body or the content-type.

Everything below was measured against Cypress 16.1.0 and Chrome 153 using the specs in
this repo. `packages/server/lib/browsers/cdp-protocol/` and `packages/network-interception/`
are byte-identical between the `v16.1.0` tag and `develop` at `0e3f5a2cbd`, so the code
referenced here is the code that shipped.

## What the tests establish

| spec | what it changes in the response handler | native path | `forceHttp1` |
| :--- | :--- | :--- | :--- |
| [spec.cy.js](cypress/e2e/spec.cy.js) | `set-cookie` on a 200 | **fails** | passes |
| [redirect.cy.js](cypress/e2e/redirect.cy.js) | `set-cookie` on a 302 hop | **fails** | passes |
| [continue-path.cy.js](cypress/e2e/continue-path.cy.js) | `set-cookie` and `x-probe` on a 200 | **`set-cookie` fails, `x-probe` lands** | passes |
| [fulfill-path.cy.js](cypress/e2e/fulfill-path.cy.js) | `set-cookie` and the body, on a 200 | passes | passes |
| [redirect-fulfill.cy.js](cypress/e2e/redirect-fulfill.cy.js) | `set-cookie` and the body, on a 302 hop | **fails** | passes |

The first two are ordinary failure evidence. The last three do the real work.

`continue-path.cy.js` rules out Cypress dropping the headers. It rewrites an ordinary
header and `set-cookie` in the same handler and touches nothing else, so both ride the
same `Fetch.continueResponse` call. The page reads back `x-probe: rewritten`. The cookie
is still `foo=original`. The modified headers were sent and applied. `set-cookie` alone
was ignored.

`fulfill-path.cy.js` identifies the lever. It makes the same `set-cookie` edit and also
assigns `res.body`. That one extra line flips Cypress from `Fetch.continueResponse` to
`Fetch.fulfillRequest`, and the cookie rewrite lands.

`redirect-fulfill.cy.js` shows the lever does not work on a 302. Same body assignment,
scoped to the redirect hop, and the cookie stays `foo=original`. The browser still
follows the redirect, so fulfilling did not break the hop — it just did not update the
cookie. This is the result that constrains the fix, and it is covered in full below.

## Where this lives in the code

`encodePausedResponse` in
[cdp-fetch-codec.ts](https://github.com/cypress-io/cypress/blob/v16.1.0/packages/server/lib/browsers/cdp-protocol/cdp-fetch-codec.ts)
decides between the two CDP calls:

```js
const fulfilled = bodyModified || (contentTypeModified && response.body !== undefined)
```

A `set-cookie` edit sets neither flag, so the response takes `continueResponse`.

The function's own doc comment anticipates this shape of bug. It explains that
`continueResponse` is preferred because it preserves wire semantics, lists the headers
that have to fall back to `fulfillRequest`, and ends: "If Chrome ever derives another
`Network.responseReceived` field from a header without recomputing it for overrides,
that header joins the fulfill list." `set-cookie` is that case, for a different reason —
not a stale record field, but cookie storage that already happened.

## Why the header is visible to the handler in the first place

`Set-Cookie` never appears on `Fetch.requestPaused`. Cypress reconstructs it from
`Network.responseReceivedExtraInfo` in `withSetCookieHeaders`
([cdp-fetch-transport.ts:913](https://github.com/cypress-io/cypress/blob/v16.1.0/packages/server/lib/browsers/cdp-protocol/cdp-fetch-transport.ts))
and merges it into the pause headers so the middleware can see it.

That bridge is one-way. It was added in cypress-io/cypress#34327, and the unit tests
that came with it assert only the inbound direction — that the merged header reaches the
middleware. Nothing asserts that an edit to it reaches the browser. There is no unit
spec for `cdp-fetch-codec.ts` at all.

That `Set-Cookie` is absent from the Fetch pause is itself a hint about the ordering:
Chrome's network service has already parsed and stored the cookie by the time the
response pause fires. I did not confirm that ordering in Chromium source, and the fix
does not depend on it. What is measured is the behavior — `continueResponse` header
overrides reach the renderer and not the cookie jar, `fulfillRequest` reaches both.

## What a fix has to weigh

The obvious fix is to add a modified `set-cookie` to the fulfill list, next to
`contentTypeModified`: compare the middleware's `set-cookie` entries against the pause's
merged ones and set `fulfilled` when they differ.

That fix is not enough on its own. `redirect-fulfill.cy.js` already forces the fulfill
path on a 302 by hand, and the cookie rewrite still does not land. The reporter's cookie
arrives on a 302 from their auth proxy, so a fulfill-list change alone would leave the
reported case broken.

Why the 302 behaves differently is the open question. Two candidates, and I could not
separate them — the shipped binary runs from a V8 snapshot, and the `cypress:server`
debug namespaces produced no output from either the binary or the dev monorepo in this
environment, so I never saw the actual CDP calls:

- Chrome does not apply `Set-Cookie` from a fulfilled redirect either.
- The fulfill never happened. `Fetch.fulfillRequest` on a redirect pause threw, and the
  `catch` in `resolveResponse` fell back to a bare `Fetch.continueResponse`. That
  fallback exists in the transport and would produce exactly what the test shows: the
  redirect followed, the cookie unchanged.

Reading the transport's own comment at `isRedirectPause` — "a middleware that writes a
body onto one falls back to fulfill" — the fulfill was meant to happen. Anyone taking
this on should confirm which of the two it is before designing the fix. One debug run
with the CDP namespaces visible settles it.

Three further things to check, whichever direction the fix takes:

- A fulfilled response needs a materialized body. Responses that set `bodySkipped`, or
  that `shouldStreamResponseBody` routes to streaming, may have no body to hand back.
- Fulfilling gives up the streaming, `extraInfo` and HTTP caching behavior that the doc
  comment cites as the reason to prefer `continueResponse`.
- Deleting a `set-cookie` is a case worth deciding deliberately. Nothing in this repo
  tests it, and I have not checked what the legacy proxy path does with it.

The other direction is to write the cookie through `Network.setCookie` when the handler
changed it. That keeps `continueResponse` and its wire semantics, and it would cover the
redirect hop and the 200 by the same mechanism. It also updates the cookie jar out of
band from the response, which brings its own edge cases — ordering against the page's
own reads, and what to do when the handler deletes the header.

## Reproducing

```bash
npm ci
npx cypress run --browser chrome
```

Five of twelve tests fail. All twelve pass with `--config forceHttp1=true`, and all
twelve pass in Electron, which never uses the native path.
