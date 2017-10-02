describe('page', () => {
  // before each test load the page
  beforeEach(() => {
    cy.visit('index.html')
  })

  it('has h2', () => {
    cy.contains('h2', 'test')
  })

  it('execs node twice', () => {
    cy.exec('node --version')
    cy.exec('node --version')
  })

  it('works with exec', () => {
    cy.exec('node -e "console.log(process.env)"')
      .its('stdout')

    cy.exec('node --version')
      .its('stdout')
      .should('match', /^v/)

    cy.exec('echo foo')
      .its('stdout')
      .should('eq', 'foo\n')

    // assuming the folder same as project name
    cy.exec('pwd')
      .its('stdout')
      .should('include', 'foo-page')

    cy.exec('ls')

    cy.exec('node --version')
      .its('stdout')
      .should('match', /^v/)

    cy.exec('npm --version')
      .its('stdout')
      .should('match', /^\d+\.\d+\.\d+/)

    cy.exec('echo $TERM')
    cy.exec('echo $SHELL')

    cy.exec('npm run echo -- foo-bar')
      .its('stdout')
      .should('match', /foo-bar/)
  })
})
