/// <reference types="cypress" />
describe('fixtures in the same folder as integration specs', () => {
  it('works', () => {
    cy.fixture('example')
  })
})
