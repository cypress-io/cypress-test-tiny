/// <reference types="cypress" />
describe('Check Marketing logging', () => {
	before(function () {
		cy.visit('https://www.independer.nl/zorgverzekering/intro.aspx');
	});

	it('Check button click - intercept req', function () {
		const requestBody = { "wrong": "request body" };

		cy.intercept('POST', '/api/ue/c', (req) => {
			expect(JSON.stringify(req.body)).to.include(JSON.stringify(requestBody));
		}).as('sLIdentifier');

		// cy.getByUe('man', 'input').click({ force: true });
		cy.get('input[ue="man"]').click({ force: true });

		cy.wait('@sLIdentifier');
	});
});
