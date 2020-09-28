/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.wrap(Cypress.Promise.resolve('foo'))
  })
})
