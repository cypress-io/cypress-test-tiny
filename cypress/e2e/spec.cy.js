describe('page', () => {
  beforeEach(() => {
    cy.clearCookies()
  })

  it.skip('works', () => {
    cy.visit('/')
    cy.api_login('USER_TYPE_1', 'welcome')
    cy.contains('Welcome')
  })

  it('withSessions', () => {
    cy.visit('/')
    cy.api_login_sessions('USER_TYPE_1', 'welcome')
    cy.contains('Welcome')
  })
})
