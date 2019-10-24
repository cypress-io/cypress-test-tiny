/// <reference types="cypress" />
describe('block', () => {
  it('first', () => {
    cy.log('here')
    cy.wait(100)
    // cy.visit('www.google.com')
  })
  it('second', () => {
    cy.log('here')
    cy.wait(100)
    // cy.visit('www.google.com')
  })
})
// after(function firstAfter (){
//   cy.log('in after')
// })
describe('block', () => {
  it('skipped')

})

after(function () {
  cy.log('in after')
  // throw new Error('foo')
  // foo
})
