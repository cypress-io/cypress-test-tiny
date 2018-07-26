describe('beta.tenantreport.net', () => {
  it('loads', () => {
    cy.visit('https://beta.tenantreport.net/auth/login')
    // let any async mp3 load
    cy.wait(10000)
  })
})
