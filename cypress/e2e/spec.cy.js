/// <reference types="cypress" />
// https://github.com/cypress-io/cypress/issues/35209
//
// Chrome only. On the native (CDP Fetch) network path, a no-op cy.task() is
// reported ~20x slower than with forceHttp1 on pages that load a ~60 MB .wasm
// and ~57 requests. cy.task never touches the browser's network, so a slowdown
// there points at the Cypress server being busy with something else.
//
// Each test visits the page, then times no-op tasks twice: right after
// cy.visit() resolves while the page is still booting ("during-load"), and
// once #status reads "ready" ("after-ready"). Timings are printed at the end.
//
//   npx cypress run --browser chrome                          (native path)
//   npx cypress run --browser chrome --config forceHttp1=true (proxy path)
const samples = []
const starts = new Map()
let phase = 'other'

Cypress.on('command:start', (cmd) => {
  if (cmd.get('name') === 'task' && cmd.get('args')[0] === 'noop') {
    starts.set(cmd.get('id'), performance.now())
  }
})

Cypress.on('command:end', (cmd) => {
  const start = starts.get(cmd.get('id'))

  if (start !== undefined) {
    samples.push({ phase, ms: performance.now() - start })
    starts.delete(cmd.get('id'))
  }
})

const setPhase = (p) => cy.then(() => { phase = p })

describe('heavy SPA page', () => {
  after(() => {
    const label = `${Cypress.browser.name}-${Cypress.config('forceHttp1') ? 'forceHttp1' : 'native'}`

    cy.task('report', { label, samples })
  })

  for (let i = 1; i <= 8; i++) {
    it(`visit ${i}`, () => {
      // A few routes for specific URLs, as in the report. The page mocks /api/*
      // in-page, so none of these are hit; they only need to be registered.
      cy.intercept('GET', '/api/session')
      cy.intercept('POST', '/api/analytics/events', { statusCode: 204 })
      cy.intercept('GET', '/config/feature-flags.json', { fixture: 'example.json' })

      cy.visit('/')

      setPhase('during-load')
      for (let t = 0; t < 4; t++) cy.task('noop')

      cy.get('#status', { timeout: 60000 }).should('have.text', 'ready')

      setPhase('after-ready')
      for (let t = 0; t < 4; t++) cy.task('noop')
    })
  }
})
