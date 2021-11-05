/// <reference types="cypress" />
it('never finishes', () => {
  cy.wrap(1).should(() => cy.log('here'))
})
