/// <reference types="cypress" />

describe('floating-vue dropdown with rAF workaround', () => {
  beforeEach(() => {
    cy.on('window:before:load', (win) => {
      win.requestAnimationFrame = (cb) => win.setTimeout(() => cb(win.performance.now()), 0)
      win.cancelAnimationFrame = (id) => win.clearTimeout(id)
    })
  })

  it('opens the dropdown menu on click', () => {
    cy.visit('/')
    cy.get('[data-cy=menu-trigger]').click()
    cy.get('.v-popper__popper--shown').should('exist')
    cy.get('[data-cy=menu-item-profile]').should('be.visible')
  })
})
