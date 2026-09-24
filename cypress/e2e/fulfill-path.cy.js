/// <reference types="cypress" />

// https://github.com/cypress-io/cypress/issues/34902 — root cause probe.
//
// On the native path Cypress picks between Fetch.continueResponse and
// Fetch.fulfillRequest in cdp-fetch-codec.ts#encodePausedResponse. A response
// whose body is untouched takes continueResponse; touching the body sets
// `bodyModified` and flips it to fulfillRequest.
//
// Same set-cookie rewrite as spec.cy.js, the only difference being that this
// one also assigns res.body — so if these pass while spec.cy.js fails, the
// choice between the two CDP calls is what decides whether the rewrite lands.
const CROSS_SITE = 'http://127.0.0.1:7878'

function interceptAndRewrite () {
  cy.intercept('*', (req) => {
    req.on('response', (res) => {
      const setCookies = res.headers['set-cookie']

      if (!setCookies) return

      res.headers['set-cookie'] = (Array.isArray(setCookies) ? setCookies : [setCookies])
      .filter((x) => x)
      .map((headerContent) => headerContent.replace('foo=original', 'foo=rewritten'))
      .map((headerContent) => headerContent.replace(/samesite=(lax|strict)/gi, 'Secure; SameSite=None'))

      // the only difference from spec.cy.js
      res.body = 'ok-modified'
    })
  })
}

function requestCookie (samesite) {
  cy.visit('/')

  return cy.window().then((win) => {
    return win.fetch(`${CROSS_SITE}/set-cookie?samesite=${samesite}`, { credentials: 'include' })
    .then((r) => r.text())
  })
}

describe('same rewrite, but with a modified body', () => {
  beforeEach(() => {
    cy.clearCookies({ domain: '127.0.0.1' })
  })

  it('body modification itself lands', () => {
    interceptAndRewrite()
    requestCookie('none').should('equal', 'ok-modified')
  })

  it('rewrites the cookie value', () => {
    interceptAndRewrite()
    requestCookie('none')
    cy.getCookie('foo', { domain: '127.0.0.1' }).should('have.property', 'value', 'rewritten')
  })

  it('rewrites the SameSite attribute', () => {
    interceptAndRewrite()
    requestCookie('lax')
    cy.getCookie('foo', { domain: '127.0.0.1' }).should('have.property', 'sameSite', 'no_restriction')
  })
})
