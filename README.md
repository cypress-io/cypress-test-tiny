# cypress-test-tiny

> Tiny Cypress E2E test case

Build status | Name | Description
:--- | :--- | :---
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/cypress-io/cypress-test-tiny/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/cypress-io/cypress-test-tiny/tree/master) | CircleCI | Linux & Mac & Win 64

## Important

Note that this project **DOES NOT** include Cypress dependency in the [package.json](package.json). The reason for such omission is that we use this project to test every Cypress build and do not want to spend time installing `cypress@x.x.x` just to immediately install and test `cypress@y.y.y`. Which means when submitting pull requests with a bug report, please save the problematic version of Cypress in `package.json`. Simply run `npm install --save-dev cypress` or `npm i -D cypress@x.x.x` and commit the change before submitting a pull request.

## Repro: cy.intercept keeps the origin's trailing values when a handler shortens a header array

A `cy.intercept()` response handler that assigns a shorter array to a multi-value
header, such as `set-cookie`, does not replace the origin's array. The handler's
values are merged into it index by index, so the origin's trailing values survive.

```bash
npx cypress run --browser electron
```

The origin sends two cookies. The handler removes the first and rewrites the second:

| | `set-cookie` |
| :--- | :--- |
| origin | `kept=origin; Path=/`, `dropped=origin; Path=/` |
| handler assigns | `dropped=rewritten; Path=/` |
| browser receives | `dropped=rewritten; Path=/`, `dropped=origin; Path=/` |

`kept` is removed as intended, but the origin's `dropped=origin` survives at index 1.
It is the later header, so it overwrites the rewrite and the cookie ends up `origin`.

[cypress/e2e/spec.cy.js](cypress/e2e/spec.cy.js) has two controls (no intercept, and
a rewrite that keeps the array length) and the failing case.

| run | controls | removes one cookie and rewrites the other |
| :--- | :--- | :--- |
| 15.21.1, chrome | pass | **fail**: `dropped` stays `origin` |
| 16.2.0, electron | pass | **fail**: `dropped` stays `origin` |
| 16.2.0, chrome, `--config forceHttp1=true` | pass | **fail**: `dropped` stays `origin` |
| 16.2.0, chrome | pass | **fail**: `dropped` stays `origin` |

It fails on every network path and predates Cypress 16, so it is not the native CDP
path. The cause is `mergeWithPreservedBuffers`, which applies handler changes with
lodash `_.mergeWith`, and lodash merges arrays by index. It has done so since
cypress-io/cypress#16755. Request handlers share the same merge.
