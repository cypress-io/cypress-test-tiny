/// <reference types="cypress" />

const Username = window.Username

describe('globals', () => {
  it('shows username', () => {
    console.log('in spec username is "%s"', Username.name)
    console.log('now changed it to "foo"')
    Username.name = 'foo'
    console.log('in spec username is "%s"', Username.name)

    cy.printName()
  })
})
