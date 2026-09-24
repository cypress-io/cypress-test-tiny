/// <reference types="cypress" />

// https://github.com/cypress-io/cypress/issues/34902
// Rewriting `set-cookie` in a cy.intercept response handler stopped working in
// Cypress 16, which uses native (CDP) network interception.
const CROSS_SITE = 'http://127.0.0.1:7878'

// what the response handler actually observed, per test
let seen = []

function interceptAndRewrite () {
  // shape taken from the issue report
  cy.intercept('*', (req) => {
    req.on('response', (res) => {
      const setCookies = res.headers['set-cookie']

      seen.push({ url: req.url, setCookies })

      if (!setCookies) return

      res.headers['set-cookie'] = (Array.isArray(setCookies) ? setCookies : [setCookies])
      .filter((x) => x)
      .map((headerContent) => headerContent.replace('foo=original', 'foo=rewritten'))
      .map((headerContent) => headerContent.replace(/samesite=(lax|strict)/gi, 'Secure; SameSite=None'))
    })
  })
}

function requestCookie (samesite) {
  cy.visit('/')
  cy.window().then((win) => {
    return win.fetch(`${CROSS_SITE}/set-cookie?samesite=${samesite}`, { credentials: 'include' })
  })
}

// The handler firing and seeing the header is what makes the failures below
// meaningful: the edit is made and then ignored, rather than never attempted.
function assertHandlerSawSetCookie () {
  cy.then(() => {
    const entry = seen.find((s) => s.url.includes('/set-cookie'))

    expect(entry, 'response handler ran for the cookie request').to.exist
    expect(entry.setCookies, 'response handler saw the set-cookie header').to.exist
  })
}

function logCookie (label) {
  cy.getCookie('foo', { domain: '127.0.0.1' }).then((cookie) => {
    cy.log(`${label}: ${JSON.stringify(cookie)}`)
  })
}

describe('rewriting set-cookie in an intercept response handler', () => {
  beforeEach(() => {
    seen = []
    cy.clearCookies({ domain: '127.0.0.1' })
  })

  // control: no intercept. Establishes that the browser really does block a
  // cross-site SameSite=Lax cookie, so the failure below is meaningful.
  it('control - SameSite=Lax cross-site cookie is blocked with no intercept', () => {
    requestCookie('lax')
    logCookie('control-lax')
    cy.getCookie('foo', { domain: '127.0.0.1' }).should('be.null')
  })

  // control: no intercept, server already sends SameSite=None.
  it('control - SameSite=None cross-site cookie is accepted with no intercept', () => {
    requestCookie('none')
    logCookie('control-none')
    cy.getCookie('foo', { domain: '127.0.0.1' }).should('have.property', 'value', 'original')
  })

  // discriminator: does ANY set-cookie edit from the response handler survive?
  it('rewrites the cookie value', () => {
    interceptAndRewrite()
    requestCookie('none')
    logCookie('value-rewrite')
    assertHandlerSawSetCookie()
    cy.getCookie('foo', { domain: '127.0.0.1' }).should('have.property', 'value', 'rewritten')
  })

  // the reported case: rewrite SameSite=Lax -> Secure; SameSite=None
  it('rewrites the SameSite attribute', () => {
    interceptAndRewrite()
    requestCookie('lax')
    logCookie('samesite-rewrite')
    assertHandlerSawSetCookie()
    cy.getCookie('foo', { domain: '127.0.0.1' }).should('have.property', 'sameSite', 'no_restriction')
  })
})
