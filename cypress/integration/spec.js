/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('https://example.cypress.io')
    cy.contains('Kitchen Sink').then($el => {
      console.log('is element', Cypress.dom.isElement($el))
      console.log('is jquery', Cypress.dom.isJquery($el))

      console.log('[0] is element', Cypress.dom.isElement($el[0]))
      console.log('[0] is jquery', Cypress.dom.isJquery($el[0]))

      console.log('undefined is element', Cypress.dom.isElement())
      console.log('undefined is jquery', Cypress.dom.isJquery())
    })
  })
})
