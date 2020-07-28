Cypress.Commands.add('getFrame', frame => {
  // get the iframe > document > body
  // and retry until the body element is not empty
  return cy
  .get(`[data-cse="${frame}"] iframe`)
  .its('0.contentDocument.body').should('not.be.empty')
  // wraps "body" DOM element to allow
  // chaining more Cypress commands, like ".find(...)"
  // https://on.cypress.io/wrap
  .then(cy.wrap)
});

/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('/test')

    .wait(1000)

    cy.getFrame('encryptedCardNumber')
      .find('#encryptedCardNumber')
      .type(4242424242424242);
  });
})
