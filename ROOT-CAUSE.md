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
| [spec.cy.js](cypress/e2e/spec.cy.js) | `set-cookie` only | **fails** | passes |
| [redirect.cy.js](cypress/e2e/redirect.cy.js) | `set-cookie` on a 302 hop | **fails** | passes |
| [continue-path.cy.js](cypress/e2e/continue-path.cy.js) | `set-cookie` and `x-probe` | **`set-cookie` fails, `x-probe` lands** | passes |
| [fulfill-path.cy.js](cypress/e2e/fulfill-path.cy.js) | `set-cookie` and the body | passes | passes |

Three of these are ordinary failure evidence. Two of them do the real work.

`continue-path.cy.js` rules out Cypress dropping the headers. It rewrites an ordinary
header and `set-cookie` in the same handler and touches nothing else, so both ride the
same `Fetch.continueResponse` call. The page reads back `x-probe: rewritten`. The cookie
is still `foo=original`. The modified headers were sent and applied. `set-cookie` alone
was ignored.

`fulfill-path.cy.js` identifies the lever. It makes the same `set-cookie` edit and also
assigns `res.body`. That one extra line flips Cypress from `Fetch.continueResponse` to
`Fetch.fulfillRequest`, and the cookie rewrite lands.

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

The narrow fix is to add a modified `set-cookie` to the fulfill list, next to
`contentTypeModified`. Compare the middleware's `set-cookie` entries against the pause's
merged ones and set `fulfilled` when they differ.

Fulfilling is not free, which is why the current code avoids it by default. Four things
to check before taking that route:

- A fulfilled response needs a materialized body. Responses that set `bodySkipped`, or
  that `shouldStreamResponseBody` routes to streaming, may have no body to hand back.
- Fulfilling gives up the streaming, `extraInfo` and HTTP caching behavior that the doc
  comment cites as the reason to prefer `continueResponse`.
- Redirect hops go through `isRedirectPause` and never carry a body. `redirect.cy.js`
  fails today, so whatever the fix is has to cover that path, and fulfilling a 302 is
  not the same operation as fulfilling a 200.
- Deleting a `set-cookie` is a case worth deciding deliberately. Fulfilling without it
  stops the cookie being set. Nothing in this repo tests that, and I have not checked
  what the legacy proxy path does with it.

If fulfilling turns out to be too costly on those paths, the other direction is to write
the cookie through `Network.setCookie` when the handler changed it. That keeps
`continueResponse` and its wire semantics. It also means the browser's cookie jar is
updated out of band from the response, which is a different set of edge cases.

## Reproducing

```bash
npm ci
npx cypress run --browser chrome
```

Four of ten tests fail. All ten pass with `--config forceHttp1=true`, and all ten pass
in Electron, which never uses the native path.
