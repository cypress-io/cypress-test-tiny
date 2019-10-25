describe('typing into date field', () => {
  it('works', () => {
    cy.visit("index.html")
    cy.get("#mydate").type("1995-12-04")
    cy.window().then(window => {
      expect(window.receivedInput).to.be.true
    })
  })
})
