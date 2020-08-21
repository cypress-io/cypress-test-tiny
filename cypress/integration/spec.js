/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.viewport('phone');
    cy.visitIntegrationTests('phone', {
      deeplinkRoute: '/search',
      config: {
        appFeatures: {
          isWithdrawCashJPEnabled: true,
          isClientRenewalEnabled: true,
          isInsightsEnabled: true,
          isTradingConditionsEnabled: true,
          isPriceAlertsEnabled: true,
          isAutoTradingAllowed: true,
          isGuidedManagedPortfolioEnabled: true,
          isRealTimeNettingSupported: true,
          isCostCalculatorEnabled: true,
          isTradeSignalsSupported: true,
          isSitecoreConfigEnabled: true,
          isFundingOptionsEnabled: true,
        },
      },
    });

    cy.renderApp({
      scenario: {
        clientinfo: {
          canInitiateChat: true,
        },
      },
    });
    cy.fetchMyAccountMenu();

    // if you set this to false `yarn test` will not hang
    const breakCypress =  true;
    if (breakCypress) {
      cy.getByTestId('instrument-search-textbox').should('exist');
      cy.getByTestId('navbar').contains('Trading').trigger('tap');
      cy.get('[data-id="2"]').should('be.visible').click();
      cy.getByTestId('tst-btn-cardcarousel-moreactions').should('be.visible').click();
      cy.get('[data-test-id="tst-action-menu"] .tst-chart').should('exist').click();
    }

    cy.getByTestId('open-positions').trigger('tap');
    cy.getByTestId('watchlist').trigger('tap', { force: true });
    cy.get('[data-id="2"]').should('be.visible').click();
    cy.getByTestId('tst-btn-cardcarousel-moreactions').should('be.visible').click();
    cy.get('[data-test-id="tst-action-menu"] .tst-tradingconditions')
        .should('exist')
        .click();
    cy.getByTestId('saxoselect-portfolios').should('be.visible');
  })
})
