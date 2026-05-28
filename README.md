# cypress-test-tiny

> Tiny Cypress E2E test case

Build status | Name | Description
:--- | :--- | :---
[![CircleCI](https://dl.circleci.com/status-badge/img/gh/cypress-io/cypress-test-tiny/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/cypress-io/cypress-test-tiny/tree/master) | CircleCI | Linux & Mac & Win 64

## Important

Note that this project **DOES NOT** include Cypress dependency in the [package.json](package.json). The reason for such omission is that we use this project to test every Cypress build and do not want to spend time installing `cypress@x.x.x` just to immediately install and test `cypress@y.y.y`. Which means when submitting pull requests with a bug report, please save the problematic version of Cypress in `package.json`. Simply run `npm install --save-dev cypress` or `npm i -D cypress@x.x.x` and commit the change before submitting a pull request.

## Headless rAF + floating-vue reproduction

Minimal repro for `requestAnimationFrame` callbacks not firing in Cypress's headless Electron AUT, which prevents [floating-vue](https://floating-vue.starpad.dev/) dropdowns, menus, and popovers from opening.

**Environment:** Cypress 15.10.0 · Electron headless · Vue 3 · floating-vue 5.2.2

### Run

```shell
npm ci
npm run test:repro            # headless Electron — 2 specs fail, 1 passes
npm run test:repro:headed     # all specs pass
npm run test:repro:chrome     # all specs pass
```

If Cypress fails to start with `bad option: --no-sandbox`, unset `ELECTRON_RUN_AS_NODE` (set automatically in some IDE terminals). The npm scripts already run Cypress via `env -u ELECTRON_RUN_AS_NODE`.

### Expected results

| Command | rAF spec | floating-vue spec | workaround spec |
| --- | --- | --- | --- |
| `npm run test:repro` (headless Electron) | **fail** | **fail** | **pass** |
| `npm run test:repro:headed` | pass | pass | pass |
| `npm run test:repro:chrome` | pass | pass | pass |

### Root cause

floating-vue reveals a popover by mounting it hidden (`v-popper__popper--hidden`) and flipping to shown (`v-popper__popper--shown`) inside a `requestAnimationFrame` callback. In Cypress's headless Electron AUT, rAF callbacks never fire — even though `document.visibilityState` is `"visible"`, `document.hidden` is `false`, and `document.hasFocus()` is `true`. The popover stays hidden forever.

The Cypress AUT runs inside an iframe. Per the HTML spec, `requestAnimationFrame` is paused for documents that are not being rendered. In headless Electron the AUT iframe appears to be treated as not-rendered, so rAF is never scheduled.

Enabling video recording also restores rAF (see [#31068](https://github.com/cypress-io/cypress/issues/31068)), which strongly supports this explanation: video capture forces the compositor to produce frames.

### Specs

| File | Purpose |
| --- | --- |
| [cypress/e2e/request-animation-frame.cy.ts](cypress/e2e/request-animation-frame.cy.ts) | Proves rAF never fires in headless AUT |
| [cypress/e2e/floating-vue-dropdown.cy.ts](cypress/e2e/floating-vue-dropdown.cy.ts) | Proves floating-vue dropdown stays hidden |
| [cypress/e2e/floating-vue-dropdown-workaround.cy.ts](cypress/e2e/floating-vue-dropdown-workaround.cy.ts) | Same test with rAF polyfill — passes everywhere |

### Workaround

Route `requestAnimationFrame` through `setTimeout` before the app loads. The passing spec registers this inline via `cy.on('window:before:load', ...)`. For a global fix in your own project:

```js
Cypress.on('window:before:load', (win) => {
  win.requestAnimationFrame = (cb) => win.setTimeout(() => cb(win.performance.now()), 0)
  win.cancelAnimationFrame = (id) => win.clearTimeout(id)
})
```

This works but is a global monkey-patch that would silently mask genuine rAF-timing bugs in application code.

### Related issues

- [#31068](https://github.com/cypress-io/cypress/issues/31068) — fails only in Electron headless; works with video recording enabled
- [#4678](https://github.com/cypress-io/cypress/issues/4678) — symptom-level match (Vue dropdown) but attributes it to events
- Cypress commit [e7b8683](https://github.com/cypress-io/cypress/commit/e7b8683) — Cypress wraps `requestAnimationFrame` internally
