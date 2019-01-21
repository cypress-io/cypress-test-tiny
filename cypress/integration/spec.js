/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    expect(Cypress.env('x')).to.equal('foo')
    expect(Cypress.env('y')).to.equal('bar')
  })
})
