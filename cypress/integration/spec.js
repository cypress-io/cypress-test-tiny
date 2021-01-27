/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')
    cy.wrap(false, {timeout: 100}).should('be.true')
  })
})

afterEach(function () {
  console.log(this.currentTest)
  if (this.currentTest.state === 'failed') {
    cy.wait(5000)
  }
})
