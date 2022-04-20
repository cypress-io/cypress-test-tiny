/// <reference types="cypress" />
describe('page', {"blockHosts": ""}, () => {
  beforeEach(() => {
    cy.intercept({
      method: 'POST',
      url: /^https:\/\/.*\.ingest.sentry.io\/api\/.*/,
    })
      .as('sentry');
  });

  it('works', () => {
    console.log(JSON.parse(JSON.stringify(Cypress.config())));

    cy.visit('https://docs.cypress.io/api/table-of-contents');

    cy.wait('@sentry').its('response.statusCode').should('eq', 200);
  });
});
