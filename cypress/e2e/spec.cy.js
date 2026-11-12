/// <reference types="cypress" />
// https://github.com/cypress-io/cypress/issues/34964
// https://github.com/cypress-io/cypress/issues/35025
//
// Chrome only. A cy.intercept stub body is sent to Chrome in a single
// base64-encoded Fetch.fulfillRequest message. Above Chrome's 100 MiB DevTools
// message limit (~75 MB of raw body) Chrome drops the CDP connection, which
// also carries the driver's socket to the server. After that:
// - the next cy.intercept never resolves, freezing the command queue (#34964)
// - in open mode, Re-run stays on "Your tests are loading..." (#35025)
// Passes in Electron and with forceHttp1: true.
describe('large intercept stub body', () => {
  it('stubs a response body larger than the CDP message limit', () => {
    const body = `var x = "${'a'.repeat(80 * 1024 * 1024)}"`

    cy.intercept('GET', '**/assets/js/scripts.*.js', {
      headers: { 'content-type': 'application/javascript' },
      body,
    }).as('largeScript')

    cy.visit('https://example.cypress.io')
    cy.wait('@largeScript')
    cy.intercept('POST', '/api/data').as('apiData')
    cy.contains('h1', 'Kitchen Sink')
  })
})
