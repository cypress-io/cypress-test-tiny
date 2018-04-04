describe('XHR', () => {
  it('loads server response', () => {
    cy.visit('index.html')
    cy.contains('#result', 'catchPhrase').should('be.visible')
  })
})
