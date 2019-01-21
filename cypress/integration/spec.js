/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    expect(Cypress.env('x')).to.equal(1)
    expect(Cypress.env('y')).to.equal(2)
  })
})
