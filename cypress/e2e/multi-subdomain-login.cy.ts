/// <reference types="cypress" />

describe('multi-subdomain login (#33939)', () => {
  beforeEach(() => {
    Cypress.Cookies.debug(true)
  })

  it('logs into admin, then logs into dashboard', () => {
    const adminUrl = Cypress.env('adminUrl') as string
    const dashboardUrl = Cypress.env('dashboardUrl') as string

    cy.visit(`${adminUrl}/login`)
    cy.get('[data-cy=username]').type('admin')
    cy.get('[data-cy=password]').type('password')
    cy.get('[data-cy=login]').click()
    cy.url().should('eq', `${adminUrl}/`)
    cy.get('[data-cy=session]').should('contain', 'admin')

    cy.visit(`${dashboardUrl}/login`)
    cy.get('[data-cy=username]').type('user')
    cy.get('[data-cy=password]').type('password')
    cy.get('[data-cy=login]').click()

    // TODO(kLjubomir): tighten assertions after tuning cookie-hooks.ts
    cy.url().should('eq', `${dashboardUrl}/`)
    cy.get('[data-cy=session]').should('contain', 'user')
  })
})
