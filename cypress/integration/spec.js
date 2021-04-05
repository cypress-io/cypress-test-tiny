/// <reference types="cypress" />
it('uses the alias', () => {
  // cy.visit('/')
  cy.visit('index.html')
  cy.focused().should('have.id', 'fname').blur()

  // completely unrelated field
  cy.contains('Child div').as('child').should('be.visible')

  // re-render the label
  cy.get('button').click()

  cy.get('@child')
  // just querying it again works
  // cy.contains('Child div').as('child').should('be.visible')
})
