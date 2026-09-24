# cypress-test-tiny

> Tiny Cypress E2E test case

Build status | Name | Description
:--- | :--- | :---
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/cypress-io/cypress-test-tiny/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/cypress-io/cypress-test-tiny/tree/master) | CircleCI | Linux & Mac & Win 64

## Important

Note that this project **DOES NOT** include Cypress dependency in the [package.json](package.json). The reason for such omission is that we use this project to test every Cypress build and do not want to spend time installing `cypress@x.x.x` just to immediately install and test `cypress@y.y.y`. Which means when submitting pull requests with a bug report, please save the problematic version of Cypress in `package.json`. Simply run `npm install --save-dev cypress` or `npm i -D cypress@x.x.x` and commit the change before submitting a pull request.

## Repro: cypress-io/cypress#34902

`set-cookie` rewrites made in a `cy.intercept()` response handler are dropped when
Chrome runs on the native (CDP) network path, which became the default in Cypress 16.

```bash
npx cypress run --browser chrome
```

[cypress/e2e/spec.cy.js](cypress/e2e/spec.cy.js) has four tests. The two controls
establish browser behavior with no intercept in play; the two rewrite tests are the
bug. `server.js` is bound once but addressed two ways — the AUT loads from
`http://localhost:7878`, the cookie endpoint is `http://127.0.0.1:7878` — so the
`set-cookie` arrives on a cross-site response.

| run | controls | rewrites cookie value | rewrites SameSite |
| :--- | :--- | :--- | :--- |
| 15.21.1, chrome | pass | pass | pass |
| 16.0.0, chrome | pass | **fail** — cookie value stays `original` | **fail** — cookie never set |
| 16.1.0, chrome | pass | **fail** — cookie value stays `original` | **fail** — cookie never set |
| 16.1.0, chrome, `--config forceHttp1=true` | pass | pass | pass |
| 16.1.0, electron | pass | pass | pass |

The value-rewrite test is what separates the two readings: it is not that `SameSite`
specifically is mishandled, it is that no edit to `set-cookie` survives at all. The
last two rows point at the native path as the cause — `forceHttp1` routes Chrome back
through the legacy proxy, and Electron never left it.
