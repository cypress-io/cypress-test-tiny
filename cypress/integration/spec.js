/// <reference types="cypress" />
it('opens the video in frame', () => {
  cy.visit('/')
  // Scroll to feed
  cy.get('.cy-grid').scrollIntoView()
  // Should hover over to the video at index 1
  cy.get(`.cy-thumbnail-link`).eq(1)
    .pause()
    .trigger('click')
})
