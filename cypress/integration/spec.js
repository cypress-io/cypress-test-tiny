/// <reference types="cypress" />
it('Login page shows', () => {
  cy.visit('app.staging.flkitover.com');
  cy.clearCookies();
  cy.location('pathname').should('equal', '/');
  cy.get('h1').contains('Log In');

  cy.intercept('POST', '/login').as('login');
  cy.get('[name=email]').type('something@something.com');
  cy.get('[name=password]').type('Test1234');
  cy.contains('button', 'Log in').click();

  cy.wait('@login')
      .its('response.statusCode')
      .should('eq', 401);

  cy.intercept('POST', '/login').as('login2');
  cy.get('[name=password]').type('Test1234');
  cy.contains('button', 'Log in').click();

  cy.wait('@login2')
      .its('response.statusCode')
      .should('eq', 401);
});
