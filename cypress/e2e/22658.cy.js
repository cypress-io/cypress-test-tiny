it('retries should on window object', () => {
    cy.visit('/cypress/fixtures/index.html')
    cy.contains('redirect').click()
    cy.url().should('contain', "fixtures/index2.html")
})
  

it('retries should on window object', () => {
    cy.visit('/cypress/fixtures/index3.html')
    cy.url().should('contain', "fixtures/index.html")
})
