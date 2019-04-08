/// <reference types="cypress" />
describe('page', () => {
  it('fails', () => {
    cy.wrap(null).then(Cypress.Promise.reject)
  })
})
