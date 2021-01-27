/// <reference types="cypress" />
it('opens the video in frame', () => {
  cy.visit('/')
  cy.get(`.cy-thumbnail-link`).first()
    .should('be.visible')
    .click()
})
