describe('cookies', () => {
  it('test', () => {
    cy.viewport('macbook-13')
    cy.clearAllCookies()
    cy.visit('cypress/fixtures/cookie.html')
    cy.get('#cookieVal').should('contain', 'none')
    cy.visit('cypress/fixtures/cookie.html?set=true')
    cy.get('#cookieVal').should('contain', 'some value')
    cy.clearAllCookies()
    cy.visit('cypress/fixtures/cookie.html')
    cy.get('#cookieVal').should('contain', 'none')
  })
})