/// <reference types="cypress" />

// https://github.com/cypress-io/cypress/issues/34902 — root cause probe.
//
// fulfill-path.cy.js shows that flipping the codec to Fetch.fulfillRequest makes
// a set-cookie rewrite land on a 200. This asks the same question of the 302 hop,
// which is the shape in the report. The body assignment is scoped to the redirect
// so only that hop is fulfilled.
const CROSS_SITE = 'http://127.0.0.1:7878'

describe('set-cookie on a redirect hop, with the body touched', () => {
  beforeEach(() => {
    cy.clearCookies({ domain: '127.0.0.1' })

    cy.intercept('*', (req) => {
      req.on('response', (res) => {
        const setCookies = res.headers['set-cookie']

        if (!setCookies) return

        res.headers['set-cookie'] = (Array.isArray(setCookies) ? setCookies : [setCookies])
        .filter((x) => x)
        .map((headerContent) => headerContent.replace('foo=original', 'foo=rewritten'))

        if (req.url.includes('/redirect')) {
          res.body = 'x'
        }
      })
    })
  })

  it('still follows the redirect', () => {
    cy.visit('/')
    cy.window().then((win) => {
      return win.fetch(`${CROSS_SITE}/redirect`, { credentials: 'include' }).then((r) => r.text())
    }).should('equal', 'landed')
  })

  it('rewrites the cookie value set by the 302', () => {
    cy.visit('/')
    cy.window().then((win) => {
      return win.fetch(`${CROSS_SITE}/redirect`, { credentials: 'include' }).then((r) => r.text())
    })

    cy.getCookie('foo', { domain: '127.0.0.1' }).should('have.property', 'value', 'rewritten')
  })
})
