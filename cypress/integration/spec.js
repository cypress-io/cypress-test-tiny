/// <reference types="cypress" />
describe('Cypress sanity check', () => {
  it('yields HTMLElement from document.getElementById', () => {
    cy.visit('index.html')
    cy.get('#root')
    cy.window().then(win => {
      const root = win.document.getElementById('root')
      expect(root).not.to.equal(undefined)
      expect(root).to.be.instanceOf(win.HTMLElement)
    })
  })
})
