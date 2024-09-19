/// <reference types="cypress" />
describe('page', () => {
  for (let i = 0; i < 500 ; i++) {    
    it('Yeah - ' + i, () => {
      cy.wait(5000)
      cy.visit('https://www.google.com/');
    });
  }
})
