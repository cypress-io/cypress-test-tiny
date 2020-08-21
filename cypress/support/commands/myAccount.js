Cypress.Commands.add('fetchMyAccountMenu', () => {
    Cypress.log({
        name: 'fetch myAccount menus',
        displayName: 'Fetch myAccount menus',
        message: '',
    });

    cy.callFunctionOnce('fetchMyAccountMenu');
});
