/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')
  }),
  it('getting an element', () => {
    cy.get('h1')
  })
})
