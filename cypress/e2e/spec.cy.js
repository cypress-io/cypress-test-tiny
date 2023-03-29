/// <reference types="cypress" />
it('Open New Mail', () => {
  cy.visit('../index.html')
  cy.get('button[name=Mail]').click();
  // validate Launch of external handler
});