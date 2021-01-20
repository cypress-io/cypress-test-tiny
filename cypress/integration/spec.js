/// <reference types="cypress" />
it('gets into a loop', () => {
  cy.wrap('bar')
    .should(() => {
      cy.wrap('foo')
    })
})
