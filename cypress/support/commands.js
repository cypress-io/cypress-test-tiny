// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('data', (str) => {
  return cy.get(`[data-cy="${str}"]`)
})

const i18nOrigin = (lang) => `http://${lang}.origin.com:3000`

Cypress.Commands.add('i18nHeaderText', (i18n) => {
  cy.origin(i18nOrigin(i18n), () => {
    cy.get('h1').invoke('text')
  })
})

Cypress.Commands.add('i18nSwitch', (...[arg1, arg2]) => {
  const from = arg2 ? arg1 : undefined
  const to = arg2 ? arg2 : arg1

  if (from) {
    cy.origin(i18nOrigin(from), { args: [to] }, (to) => {
      Cypress.require('../support/commands.js')
      cy.data('i18n-options').select(to)
      cy.data('translate-button').click()
    })
  } else {
    cy.data('i18n-options').select(to)
    cy.data('translate-button').click()
  }
})