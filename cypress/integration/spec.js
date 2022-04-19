/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    // this page (see: https://github.com/warpdesign/cypress-test-redirect-before-onload/blob/gh-pages/index2.html)
    // attempts to change the page's location before the onload event gets fired.
    // This makes cypress wait forever for the load event to be fired and eventually
    // triggers a timeout error
    cy.visit('/index2.html')
    // replacing the above line by this one does not trigger the problem:
    // cy.visit('/')
  })
})
