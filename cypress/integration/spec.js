describe('page', () => {
  beforeEach(() => {
    cy.visit('https://material.angularjs.org/latest/demo/input')
    cy.url().should('eq', 'https://material.angularjs.org/latest/demo/input');
  });

  it('fails to complete typing and triggers event on select element', () => {
    cy.contains('label', 'State').siblings('md-select').click();
    cy.get('md-option').contains('CA').click();

    cy.contains('label', 'First name').siblings('input').as('firstNameInput')
    cy.get('@firstNameInput').scrollIntoView();
    cy.get('@firstNameInput').type('My Name is...');

    cy.get('@firstNameInput').then((element) => {
      const value = element[0].value
      console.log('element', element)
      expect(value).to.equal('My Name is...');
    });
  });

  it('works around the completing the type command and does\'t trigger the select a second time', () => {
    cy.contains('label', 'State').siblings('md-select').click();
    cy.get('md-option').contains('CA').click();

    cy.contains('label', 'First name').siblings('input').as('firstNameInput');
    cy.get('@firstNameInput').scrollIntoView();
    cy.get('@firstNameInput').should('exist').and('be.visible');
    cy.get('@firstNameInput').click();
    cy.get('@firstNameInput').type('My Name is...');

    cy.get('@firstNameInput').then((element) => {
      const value = element[0].value
      console.log('element', element)
      expect(value).to.equal('My Name is...');
    });
  });

})
