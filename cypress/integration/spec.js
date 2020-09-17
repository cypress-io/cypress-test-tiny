/// <reference types="cypress" />
it('has header', () => {
  cy.visit('https://kiwi.com/en/');
  cy.get('[data-test=NavBar]', {timeout: 20000}).should('be.visible')
})
