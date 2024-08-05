/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('http://docs.cypress.io')
    cy.contains('Why Cypress?', { timeout: 10000 }).should('be.visible')    
  })
})
