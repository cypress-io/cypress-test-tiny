/// <reference types="cypress" />

// A cy.intercept response handler that assigns a shorter array to a
// multi-value header keeps the origin's trailing values.
//
// The origin sends:  ['kept=origin; Path=/', 'dropped=origin; Path=/']
// The handler sets:  ['dropped=rewritten; Path=/']
// The browser gets:  ['dropped=rewritten; Path=/', 'dropped=origin; Path=/']
//
// The handler's array is merged into the origin's index by index instead of
// replacing it, so the origin's second line survives at index 1 and, being the
// later header, overwrites the handler's rewrite.
describe('cy.intercept assigns a shorter set-cookie array', () => {
  beforeEach(() => {
    cy.clearCookies()
  })

  it('control: the origin sets both cookies', () => {
    cy.visit('/two-cookies')
    cy.getCookie('kept').should('have.property', 'value', 'origin')
    cy.getCookie('dropped').should('have.property', 'value', 'origin')
  })

  it('control: a same-length rewrite lands', () => {
    cy.intercept('/two-cookies', (req) => {
      req.on('response', (res) => {
        res.headers['set-cookie'] = res.headers['set-cookie']
        .map((line) => line.replace('dropped=origin', 'dropped=rewritten'))
      })
    })

    cy.visit('/two-cookies')
    cy.getCookie('kept').should('have.property', 'value', 'origin')
    cy.getCookie('dropped').should('have.property', 'value', 'rewritten')
  })

  it('removes one cookie and rewrites the other', () => {
    cy.intercept('/two-cookies', (req) => {
      req.on('response', (res) => {
        res.headers['set-cookie'] = res.headers['set-cookie']
        .filter((line) => !line.startsWith('kept='))
        .map((line) => line.replace('dropped=origin', 'dropped=rewritten'))
      })
    })

    cy.visit('/two-cookies')
    cy.getCookie('kept').should('be.null')
    // fails: the value stays `origin`
    cy.getCookie('dropped').should('have.property', 'value', 'rewritten')
  })
})
