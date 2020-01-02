/// <reference types="cypress" />
it('confirms', () => {
  cy.visit('index.html')

  cy.on('window:confirm', (text) => {
    // make the assertion fail on purpose
    // but the test does NOT wait for this assertion to pass
    // By the time the assertion fails, the test has passed
    expect(false).to.be.true
  })

  cy.get('#click').click()
})
