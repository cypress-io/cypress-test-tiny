describe('page', () => {
  it('works', () => {
	  cy.visit(`cypress/fixtures/test.html`);
	  cy.get('input').type('10');
	  cy.get('input').should('have.value', 10);
  })
})
