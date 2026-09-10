// Same origin, same clientCertificates config, same run.
// The only difference is which process opens the TLS connection.

it('cy.request — Node opens the connection', () => {
  cy.request('https://localhost:8443').its('body').should('contain', 'repro-client')
})

it('cy.visit — the document', () => {
  cy.visit('https://localhost:8443')
  cy.get('#cn').should('have.text', 'repro-client')
})

it('subresource — the browser opens its own connection', () => {
  cy.visit('https://localhost:8443')
  cy.get('#sub').should('have.text', 'repro-client')
})
