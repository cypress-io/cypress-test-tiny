Cypress.Commands.add('multitab', (tabPath, callback) => {
  cy.task('multitab', { tabPath, callback: callback.toString() })
})
