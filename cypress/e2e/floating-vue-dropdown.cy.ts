/// <reference types="cypress" />

describe('floating-vue dropdown in headless AUT', () => {
  it('opens the dropdown menu on click', () => {
    cy.visit('/')
    cy.get('[data-cy=menu-trigger]').click()
    cy.get('.v-popper__popper--shown').should('exist')
    cy.get('[data-cy=menu-item-profile]').should('be.visible')
  })
})
