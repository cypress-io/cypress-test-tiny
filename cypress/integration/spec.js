/// <reference types="cypress" />
it('catches correctly exception', () => {
  cy.visit('index.html', {
    onBeforeLoad (win) {
      win.navigator.language = 'JavaScript'
    }
  })
})
