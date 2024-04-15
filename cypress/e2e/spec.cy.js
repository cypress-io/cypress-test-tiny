/// <reference types="cypress" />
describe('page', () => {
  it('Error: WebSocket connection closed', function () {
    cy.visit('https://share.vidyard.com/watch/mR7nXEXcdnRMCyYG52bVxj');
    cy.get('#vidyard-logo')
      .find('img')
      .should('be.visible');
    cy.get('head link[rel*="icon"]')
      .should('have.attr', 'href', '/favicon.ico');
    cy.get('#get-vidyard-free-cta')
      .should('be.visible')
      .and('have.text', 'Sign Up for Free');
    cy.get('body')
      .should('have.css', 'background-color', 'rgb(255, 255, 255)');
    cy.get('#name-header')
      .find('h1')
      .should('be.visible')
      .and('have.text', 'Paint Squiggles');
    cy.get('#email-signup-button')
      .should('be.visible')
      .and('have.text', 'Sign up with Business Email');
    const socialLogins = [
      '#google-signup-button',
      '#outlook-signup-button',
    ];
    socialLogins.forEach((element) => {
      cy.get(element)
        .should('be.visible');
    });
  });
})
