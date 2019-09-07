/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://docs.cypress.io/guides/overview/why-cypress.html')
    cy.log('setting href to bar')
    cy.window().then(w => {
      w.location.href = 'writing-and-organizing-tests.html'
    })
  })
})
