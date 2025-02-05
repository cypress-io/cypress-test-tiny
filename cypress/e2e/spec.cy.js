it('fails', () => {
  cy.visit('http://first.domain.test:3030/first')

  cy.intercept('**/code').as('codereq')
  cy.contains('second').click()   // navigates to second domain

  cy.wait('@codereq').then(() => {
    cy.url().should('eq', 'http://second.domain.test:3030/second?code=abcdefg')
  })

  cy.contains('third').click() // navigates to third domain
  
  cy.get('#btn').click()
})

it('succeeds', () => {
  cy.visit('http://first.domain.test:3030/first')

  cy.intercept('**/code').as('codereq')
  cy.contains('second').click()   // navigates to second domain

  cy.origin('http://second.domain.test:3030', () => {
    cy.wait('@codereq').then(() => {
      cy.url().should('eq', 'http://second.domain.test:3030/second?code=abcdefg')
    })
  
    cy.contains('third').click() // navigates to third domain
  })

  cy.origin('http://third.domain.test:3030', () => {
    cy.get('#btn').click()
  })
})