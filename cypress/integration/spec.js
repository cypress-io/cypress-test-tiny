/// <reference types="cypress" />
describe('XHR', () => {
  it('loads server response', () => {
    cy.visit('index.html')
    cy.contains('#result', 'catchPhrase').should('be.visible')
  })

  it('waits for server response', () => {
    cy.server()
    cy.route(/users/).as('xhr')
    cy.visit('index.html')
    cy.wait('@xhr')
    cy.contains('#result', 'catchPhrase').should('be.visible')
  })
})
