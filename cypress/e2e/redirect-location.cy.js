/// <reference types="cypress" />

// https://github.com/cypress-io/cypress/issues/34902 — root cause probe.
//
// set-cookie is not the only header a redirect hop ignores. This rewrites
// `location` on the 302 and nothing else. The browser follows the original
// location, so the override never took effect.
//
// That matters for the diagnosis in two ways. It rules out using a `location`
// rewrite to tell whether the fulfill in redirect-fulfill.cy.js actually ran.
// And it says the redirect hop drops at least one more header that Chrome's
// network stack consumes before the response pause fires.
const CROSS_SITE = 'http://127.0.0.1:7878'

describe('rewriting location on a redirect hop', () => {
  it('does not apply the rewrite', () => {
    cy.intercept('*', (req) => {
      req.on('response', (res) => {
        if (req.url.includes('/redirect')) {
          res.headers['location'] = '/after-redirect?probe=1'
        }
      })
    })

    cy.visit('/')
    cy.window().then((win) => {
      return win.fetch(`${CROSS_SITE}/redirect`, { credentials: 'include' }).then((r) => r.text())
    }).should('equal', 'landed:probe=1')
  })
})
