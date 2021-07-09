/// <reference types="cypress" />
describe('page', () => {
  it('works without jumps', () => {
    cy.visit('index.html')
    cy.get('button').click()
  })

  it('works without jumps using CSS resource link', () => {
    cy.visit('index-with-css-link.html')
    cy.get('button').click()
  })

  it('DOM snapshots jump', () => {
    cy.visit('index-with-css-import.html')
    cy.get('button').click()
  })

  it('DOM snapshots jump with CSS resource delay', () => {
    cy.intercept('reset.css', {
      fixture: 'reset.css',
      delay: 500,
    })
    cy.visit('index-with-css-import.html')
    cy.get('button').click()
  })
})
