/// <reference types="cypress" />
Cypress.on('test:after:run', (test) => {
  if (test.state === 'failed') {
    // https://github.com/cypress-io/cypress/issues/8701
    throw new Error('I am throwing')
  }
})

describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')
    cy.get('[class^="main-nav-link active"]').should('contain', 'ZZZ')
  })
})
