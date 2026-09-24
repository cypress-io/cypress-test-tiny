/// <reference types="cypress" />

// https://github.com/cypress-io/cypress/issues/34902 — closer to the reported
// shape: the set-cookie rides a 302 rather than a plain 200.
const CROSS_SITE = 'http://127.0.0.1:7878'

describe('set-cookie on a redirect hop', () => {
  beforeEach(() => {
    cy.clearCookies({ domain: '127.0.0.1' })

    cy.intercept('*', (req) => {
      req.on('response', (res) => {
        const setCookies = res.headers['set-cookie']

        if (!setCookies) return

        res.headers['set-cookie'] = (Array.isArray(setCookies) ? setCookies : [setCookies])
        .filter((x) => x)
        .map((headerContent) => headerContent.replace('foo=original', 'foo=rewritten'))
      })
    })
  })

  it('rewrites the cookie value set by the 302', () => {
    cy.visit('/')
    cy.window().then((win) => {
      return win.fetch(`${CROSS_SITE}/redirect`, { credentials: 'include' }).then((r) => r.text())
    }).should('equal', 'landed')

    cy.getCookie('foo', { domain: '127.0.0.1' }).should('have.property', 'value', 'rewritten')
  })
})
