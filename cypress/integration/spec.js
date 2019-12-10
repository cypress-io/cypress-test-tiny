/// <reference types="cypress" />
it('works', () => {
  const arr = new Uint8ClampedArray(2560000)
  cy.wrap(arr)
  // uncomment to have test hanging trying to inspect the wrapped value in Chai
  // .should('have.length', 2)
})
