// cypress-io/cypress#35055: a fetch POST answered with a 302, intercepted
// without a handler. The POST waits `delay` ms before answering: 25s is under
// the 30s CDP Fetch response-pause timeout and passes; 35s is over it and
// yields no response. Run with FORCE_HTTP1=1 and both pass.
describe('fetch POST answered with 302', () => {
  for (const delay of [25000, 35000]) {
    it(`yields the 302 response when the server takes ${delay}ms`, () => {
      cy.visit(`/?delay=${delay}`)
      cy.intercept('POST', /\/parents\/1\/children\?/).as('createChild')
      cy.get('input[type="submit"]').click()

      // Wait for the page to render the redirect target first, so the browser
      // is still open when a slow 302 arrives after Cypress gives up on it.
      cy.get('#done', { timeout: 90000 }).should('be.visible')

      cy.wait('@createChild', { timeout: 90000 }).then((interception) => {
        const { state, error, response } = interception

        cy.task('log', `delay ${delay}ms: ${JSON.stringify({ state, error: error?.message, statusCode: response?.statusCode })}`)
        cy.wrap(interception).its('response.statusCode').should('eq', 302)
      })
    })
  }
})
