describe('Test window.confirm', () => {
  beforeEach(() => {
    cy.on('window:confirm', () => true); // this is unnecessary as it is the default behavior
  });

  it('should accept the confirm and successfully reload', function() {
    cy.visit(`cypress/fixtures/test.html`);
    cy.reload();
  });
});
