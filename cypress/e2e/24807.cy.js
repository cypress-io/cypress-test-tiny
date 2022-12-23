it('with iframe', () => {
    cy.visit('/cypress/fixtures/hasIframe.html')
    cy.get('[data-testid="content"]').should('contain.text', 'Some title dummy text');
})

it('test without iframe', () => {
    cy.visit('/cypress/fixtures/noIframe.html')
    cy.get('[data-testid="content"]').should('contain.text', 'Some title dummy text');
})