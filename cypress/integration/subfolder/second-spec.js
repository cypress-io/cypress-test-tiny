/// <reference types="cypress" />
describe('local fixture', () => {
  it('works', () => {
    cy.fixture('subfolder/example').should('deep.equal', {works: true})
  })
})
