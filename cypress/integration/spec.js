/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('/')
    cy.log('setting href to bar')
    cy.window().then(w => {
      w.location.href = 'bar'
    })
  })
})
