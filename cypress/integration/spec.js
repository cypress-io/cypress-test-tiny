/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('index.html')
    // check CSS for that div
    cy.get('.example').invoke('css', 'border').should('include', 'solid')
    // throws an error "Cannot read property 'replace' of undefined"
    cy.get('.example').invoke('css')
  })
})
