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

  it('trims or not exec output', () => {
    const {major, minor, patch} = Cypress.version.split('.')
    let expected
    if (major === 0 && minor <= 20 && patch <= 1) {
      expected = 'foo\n'
    } else {
      expected = 'foo'
    }
    cy.exec('echo foo')
      .its('stdout')
      .should('eq', expected)
  })

  it('works with exec', () => {
    cy.exec('node -e "console.log(process.env)"')
      .its('stdout')

    cy.exec('node --version')
      .its('stdout')
      .should('match', /^v/)

    // assuming the folder same as project name
    // need OS platform support
    // cy.exec('pwd')
    //   .its('stdout')
    //   .should('include', 'foo-page')

    // cy.exec('ls')

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
