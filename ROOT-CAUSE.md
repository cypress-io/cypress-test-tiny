# Root cause: a handler that shortens a header array keeps the origin's trailing values

A `cy.intercept()` handler that assigns a shorter array to a multi-value header does
not replace the origin's array. Cypress merges the handler's result back into the
message with lodash `_.mergeWith`, and lodash merges arrays index by index. Every
index past the end of the handler's array keeps the origin's value.

## What the tests establish

[cypress/e2e/spec.cy.js](cypress/e2e/spec.cy.js): the origin sends
`kept=origin; Path=/` then `dropped=origin; Path=/`.

| test | handler result | outcome |
| :--- | :--- | :--- |
| control: no intercept | n/a | both cookies `origin` |
| control: same-length rewrite | `kept=origin`, `dropped=rewritten` | lands |
| removes one, rewrites the other | `dropped=rewritten` | **`kept` removed, `dropped` stays `origin`** |

| run | controls | removes one, rewrites the other |
| :--- | :--- | :--- |
| 15.21.1, chrome | pass | **fail** |
| 16.2.0, electron | pass | **fail** |
| 16.2.0, chrome, `--config forceHttp1=true` | pass | **fail** |
| 16.2.0, chrome | pass | **fail** |

A rewrite that keeps the array's length lands, and the removal of `kept` lands. The
rewrite is lost when removing an earlier entry leaves the array shorter than the
origin's. The failure is the same on the HTTP proxy path (15.21.1, Electron,
`forceHttp1`) and on the native CDP path.

## The merge

The response handler's changes are applied in
[handle-intercept-response.ts](https://github.com/cypress-io/cypress/blob/v16.2.0/packages/net-stubbing/lib/server/handle-intercept-response.ts#L67-L79):

```ts
const mergeChanges = (before, after) => {
  mergeWithPreservedBuffers(before, _.pick(after, SERIALIZABLE_RES_PROPS))

  mergeDeletedHeaders(before, after)
}
```

[`mergeWithPreservedBuffers`](https://github.com/cypress-io/cypress/blob/v16.2.0/packages/network-interception/lib/core/merge-handler-result.ts#L15-L26)
special-cases `Buffer` only, so arrays fall through to lodash's default deep merge:

```ts
_.mergeWith(before, after, (_a, b) => {
  if (b instanceof Buffer) {
    return b
  }

  return undefined
})
```

`mergeDeletedHeaders` removes a header only when the handler set it to `undefined`,
so a header kept with fewer values is not affected by it.

The lodash merge in isolation:

```js
const before = { headers: { 'set-cookie': ['foo=origin; Path=/', 'bar=origin; Path=/'] } }

_.mergeWith(before, { headers: { 'set-cookie': ['bar=rewritten; Path=/'] } },
  (a, b) => (b instanceof Buffer ? b : undefined))

before.headers['set-cookie']
// [ 'bar=rewritten; Path=/', 'bar=origin; Path=/' ]
```

## Where it reaches the browser

`mergeChanges` writes into the incoming response, which
[`copyCookiesFromResponse`](https://github.com/cypress-io/cypress/blob/v16.2.0/packages/proxy/lib/adapters/copy-cookies-from-response.ts#L29-L109)
(the `MaybeCopyCookiesFromIncomingRes` middleware, after `InterceptResponse`) reads.
It records each line in the server-side cookie jar and appends it to the response as
`Set-Cookie`. The browser applies the headers in order, so the origin's leftover line
overwrites the handler's rewrite of the same cookie.

On the native CDP path the headers go to Chrome in `Fetch.continueResponse`. With a
handler that drops `foo` and rewrites `bar`:

```
Fetch.continueResponse { responseCode: 200, responseHeaders: [
  ..., { name: 'undefined', value: 'undefined' }, ...,
  { name: 'Set-Cookie', value: 'bar=rewritten; Path=/' },
  { name: 'Set-Cookie', value: 'bar=origin; Path=/' }, ... ] }
```

`foo` is removed, `bar=rewritten` is at index 0, and the origin's `bar=origin` is at
index 1. `Set-Cookie` is capitalized because `appendCookie` uses that name.

## Scope

- **Any multi-value header.** `set-cookie` is always an array on a Node
  `IncomingMessage`, so it is the most common case.
- **Request handlers.** `mergeIncomingRequestChanges` in the same file applies
  `before:request` changes through `mergeWithPreservedBuffers`.
- **Conditions.** The array the handler assigns is shorter than the origin's, and a
  value it keeps or changes sits before the origin's trailing entries. A handler
  that uses `map` keeps the length, and `delete res.headers['set-cookie']` goes
  through `mergeDeletedHeaders`.
- **Introduced in** cypress-io/cypress#16755 (2021), which added the customizer to
  keep lodash from converting `Buffer` bodies into arrays.

## Fix

Replace arrays instead of merging them:

```ts
_.mergeWith(before, after, (_a, b) => {
  if (b instanceof Buffer || Array.isArray(b)) {
    return b
  }

  return undefined
})
```

This applies to request and response handlers. Tests: a unit test for
`mergeWithPreservedBuffers` with a shortened array in
`packages/network-interception/test/unit`, and a system test where a handler filters
one of two cookies out.

## Open question

The same `Fetch.continueResponse` carries a `{ name: 'undefined', value: 'undefined' }`
header. Its source is untraced.

## Reproducing

```bash
npm install
npx cypress run --browser electron
npx cypress run --browser chrome --config forceHttp1=true
npx cypress run --browser chrome
npm exec --package=cypress@15.21.1 -- cypress run --browser chrome
```
