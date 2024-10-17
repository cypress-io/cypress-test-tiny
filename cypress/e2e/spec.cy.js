/// <reference types="cypress" />
describe('page', () => {
  it('... ', () => {
    cy.visit('/cypress/fixtures/input.html')
    cy.get('#input').invoke('val', 'foo').trigger('blur')
    cy.get('#input').should('have.value', 'foo')
  })
})
