# cypress-test-tiny

> Tiny Cypress E2E test case

Build status | Name | Description
:--- | :--- | :---
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/cypress-io/cypress-test-tiny/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/cypress-io/cypress-test-tiny/tree/master) | CircleCI | Linux & Mac & Win 64

## Important

Note that this project **DOES NOT** include Cypress dependency in the [package.json](package.json). The reason for such omission is that we use this project to test every Cypress build and do not want to spend time installing `cypress@x.x.x` just to immediately install and test `cypress@y.y.y`. Which means when submitting pull requests with a bug report, please save the problematic version of Cypress in `package.json`. Simply run `npm install --save-dev cypress` or `npm i -D cypress@x.x.x` and commit the change before submitting a pull request.

## Issue #33939 reproduction scaffold

Incomplete repro for [Firefox 151 multi-subdomain cookie scaffolding](https://github.com/cypress-io/cypress/issues/33939).

```shell
npm ci
npm run test:33939:firefox   # or test:33939:chrome
```

Local HTTPS app on `admin.something.test` and `dashboard.something.test`, mapped via Cypress's undocumented [`hosts`](cypress.config.js) config (no `/etc/hosts` edits).

### Extension points

Edit [server/cookie-hooks.ts](server/cookie-hooks.ts). Each request in the login flow calls a named hook:

| Request | Hook |
| --- | --- |
| `GET /login` | `attachCookiesForLoginPage(req, res, subdomain, ctx)` |
| `POST /login` | `attachCookiesForLogin(req, res, subdomain, ctx)` |
| `GET /` | `attachCookiesForHome(req, res, subdomain, ctx)` |

Tune `cookieOptions()` in the same file (e.g. set `domain: '.something.test'` on session cookies to mimic superdomain-scoped auth cookies).

Debug cookie automation: `DEBUG=cypress:server:automation:cookies npm run test:33939:firefox`
