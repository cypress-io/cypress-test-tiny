/// <reference types="cypress" />

// https://github.com/cypress-io/cypress/issues/34902 — root cause probe.
//
// Separates "Cypress never sends the modified headers" from "Chrome doesn't act
// on a modified set-cookie". The handler rewrites an ordinary header (x-probe)
// and set-cookie in the same response, and touches nothing else — so both ride
// the same Fetch.continueResponse call.
//
// If x-probe lands and the cookie doesn't, the headers were sent and applied;
// set-cookie specifically is what the browser ignores on that path.
const CROSS_SITE = 'http://127.0.0.1:7878'

function interceptAndRewrite () {
  cy.intercept('*', (req) => {
    req.on('response', (res) => {
      if (res.headers['x-probe']) {
        res.headers['x-probe'] = 'rewritten'
      }

      const setCookies = res.headers['set-cookie']

      if (!setCookies) return

      res.headers['set-cookie'] = (Array.isArray(setCookies) ? setCookies : [setCookies])
      .filter((x) => x)
      .map((headerContent) => headerContent.replace('foo=original', 'foo=rewritten'))
    })
  })
}

describe('an ordinary header and set-cookie rewritten in the same response', () => {
  beforeEach(() => {
    cy.clearCookies({ domain: '127.0.0.1' })
    interceptAndRewrite()
    cy.visit('/')
    cy.window().then((win) => {
      return win.fetch(`${CROSS_SITE}/set-cookie?samesite=none`, { credentials: 'include' })
      .then((r) => r.headers.get('x-probe'))
    }).as('probeHeader')
  })

  it('applies the ordinary header rewrite', () => {
    cy.get('@probeHeader').should('equal', 'rewritten')
  })

  it('applies the set-cookie rewrite', () => {
    cy.getCookie('foo', { domain: '127.0.0.1' }).should('have.property', 'value', 'rewritten')
  })
})
