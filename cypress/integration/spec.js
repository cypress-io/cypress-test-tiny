/// <reference types="cypress" />
it('uses the alias', () => {
  // cy.visit('/')
  cy.visit('index.html')
  cy.focused().should('have.id', 'fname')
})
