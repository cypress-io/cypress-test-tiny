/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')
  })
})

afterEach(() => {
  cy.readFile('temp.png', 'binary').then(res => {
    debugger
  })
})
