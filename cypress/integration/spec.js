/// <reference types="cypress" />
describe('Test window.confirm', () => {
  it('should accept the confirm and successfully reload', function () {
    cy.visit('/')
      .wait(1000)
    cy.reload()
      .wait(1000)
    cy.reload()
      .wait(1000)
    cy.wait(1000) // let the video finish
  });
});
