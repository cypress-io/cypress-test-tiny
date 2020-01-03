/// <reference types="cypress" />
it('first', () => {
  setTimeout(() => {
    expect(false).to.be.true
  }, 1000)

  expect(1).to.equal(1)
})

it('second', () => {
  expect(2).to.equal(2)
  cy.wait(2000)
})
