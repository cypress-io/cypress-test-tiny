/// <reference types="cypress" />

describe('requestAnimationFrame in headless AUT', () => {
  it('requestAnimationFrame fires', () => {
    cy.visit('/')
    cy.window().then((win) => new Cypress.Promise<boolean>((resolve) => {
      let fired = false
      win.requestAnimationFrame(() => { fired = true })
      win.setTimeout(() => resolve(fired), 500)
    })).should('be.true')
  })

  it('documents visibility while rAF is broken', () => {
    cy.visit('/')
    cy.window().then((win) => {
      cy.log(`visibilityState: ${win.document.visibilityState}`)
      cy.log(`hidden: ${win.document.hidden}`)
      cy.log(`hasFocus: ${win.document.hasFocus()}`)
    })
    cy.window().its('document.visibilityState').should('eq', 'visible')
    cy.window().its('document.hidden').should('eq', false)
  })
})
