/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    expect(Cypress.env('obj')).to.deep.equal({foo: 'bar'})
  })
})
