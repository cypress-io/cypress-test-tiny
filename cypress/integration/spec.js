/// <reference types="cypress" />
it('resolves', () => {
  cy.visit('index.html')
  // should wait for the promise returned from
  // the "window.app.resolves()" call to resolve
  cy.window()
    .its('app')
    .invoke('resolves')
})
it('rejects', () => {
  cy.visit('index.html')
  // should wait for the promise returned from
  // the "window.app.resolves()" call to reject and fail the test
  cy.window()
    .its('app')
    .invoke('rejects')
})
it('rejects with undefined', () => {
  cy.visit('index.html')
  // should wait for the promise returned from
  // the "window.app.resolves()" call to reject and fail the test
  cy.window()
    .its('app')
    .invoke('rejectsWithUndefined')
})
