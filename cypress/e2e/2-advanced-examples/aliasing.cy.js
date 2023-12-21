/// <reference types="cypress" />

context('Aliasing', () => {
  beforeEach(() => {
    cy.visit('www.github.com')
    cy.on('log:added', (log) => {
      console.log('log:added!', log)
    })
  })

  it('.as() - alias a DOM element for later use', { retries: 2 },  () => {
    // https://on.cypress.io/as

    // Alias a DOM element for use later
    // We don't have to traverse to the element
    // later in our code, we reference it with @
    cy.origin('https://example.cypress.io', () => {
      cy.visit('https://example.cypress.io/commands/aliasing')
      cy.get('.as-table').find('tbody>tr')
        .first().find('td').first()
        .find('button').as('firstBtn')

      // when we reference the alias, we place an
      // @ in front of its name
      cy.get('@firstBtn').click()

      cy.get('@firstBtn')
        .should('have.class', 'btn-success')
        .and('contain', 'HELLO')
    })
  })

})
