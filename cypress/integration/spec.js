describe('page', () => {
  beforeEach(() => {
    cy.server()
  })
  it('runs mock app.js script', () => {
    cy.route('/app.js', 'window.foo = 42')
    cy.visit('index.html')
    cy
      .window()
      .its('foo')
      .should('equal', 42)
  })

  it.only('returns script with headers', () => {
    cy.route({
      method: 'GET',
      url: '/app.js',
      response: 'window.foo = 42',
      headers: {
        'Content-Type': 'application/javascript',
      },
    })
    cy.visit('index.html')
    cy
      .window()
      .its('foo')
      .should('equal', 42)
  })
  // it('first', () => {
  //   cy.route('foo', 404)
  // })
  // it('second', () => {
  //   cy.route('POST', 'bar', [])
  // })
})
