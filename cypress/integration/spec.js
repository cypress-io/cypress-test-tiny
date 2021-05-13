/// <reference types="cypress" />
describe('date picker', () => {
  it('types in the date', () => {
    cy.visit('/kendo-react-ui/components/dateinputs/examples/datepicker/default/value/func/?theme=material')
    cy.get(".k-input")
      .click()
      .type('{selectall}')
      .type("5/15/1950");
    cy.get(".k-input").should('have.value', '5/15/1950')
  })
})
