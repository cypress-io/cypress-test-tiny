/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('index.html')
    cy.contains('h1', 'Utilities').should('exist')
  })
})
