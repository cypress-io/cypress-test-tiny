/// <reference types="cypress" />

// load fixture separately
const basicTest = require('../fixtures/basic-test.json')

// https://github.com/cypress-io/cypress/issues/15736
describe('nothing', function () {
  beforeEach(function () {
    cy.fixture('basic-test').then(function(testdata){
      this.data = testdata
    })
  })

  it('does little', function () {
    cy.log(this.data)
    expect(this.data).to.deep.equal(basicTest)
  })
})
