/// <reference types="cypress" />
it('hangs forever', () => {
  cy.visit('https://one.clappia.com/', { timeout: 10000 })

  // finish for the redirect
  cy.wait(100)
  cy.url().should('include', 'signin')
  // cy.contains('button', 'Sign in with Google')
})
