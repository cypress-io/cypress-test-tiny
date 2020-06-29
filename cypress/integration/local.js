/// <reference types="cypress" />
it('redirects', () => {
  cy.visit('http://localhost:5000/', {timeout: 4000})
  // cy.contains('second').click()
  cy.contains('Second page')
})
