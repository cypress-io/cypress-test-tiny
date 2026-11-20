/// <reference types="cypress" />
// https://github.com/cypress-io/cypress/issues/35205
//
// Chrome only. The page loads a 150 MiB script with frame-busting code, which
// Cypress rewrites and sends back to Chrome in a single base64-encoded
// Fetch.fulfillRequest message (~200 MiB). That is over Chrome's 100 MiB
// DevTools frame limit, so Chrome closes the CDP websocket (write EPIPE), the
// paused script never completes, pageLoadTimeout never fires, and the run
// hangs forever.
// Passes in Electron, with forceHttp1: true, and with modifyObstructiveCode: false.
describe('large rewritten script', () => {
  it('visits a page that loads a 150 MiB script Cypress rewrites', () => {
    cy.visit('/')
    cy.get('#status', { timeout: 60000 }).should('have.text', 'loaded')
  })
})
