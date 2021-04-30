/// <reference types="cypress" />
describe('page', () => {
  // https://github.com/cypress-io/cypress/issues/16281
  it('works', undefined, () => {
    cy.visit('https://example.cypress.io')
  })
})
