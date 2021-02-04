/// <reference types="cypress" />
describe('form', () => {
  it('should not be submittable', () => {
    cy.visit('index.html')

    cy.get('#form-validation').within(() => {
      // note we cannot submit by clicking the button
      // since some of the input elements on the page
      // fail the HTML validation
      cy.get('input[type=submit]').click()

      // but the .submit() happily ignores the checks
      cy.root().submit()
    })
  })
})
