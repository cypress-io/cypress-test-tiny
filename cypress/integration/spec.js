/// <reference types="cypress" />
it('has hostname', () => {
  expect(Cypress.env('testing_computer')).to.be.a('string').and.not.be.empty
})
