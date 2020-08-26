function get(selectorOrAlias, options) {
  cy.window().then(
    (win) =>
      new Promise((resolve) => {
        win.getPromiseForTimersToComplete().then(() => {
            resolve();
        });
      }),
  );
  return cy.get(selectorOrAlias, options);
}

it('works', {
  retries: 3
}, () => {
  cy.visit("http://localhost:3001/integrationTests/phone/search?theme=black&lang=en&cfg=%7B%22appFeatures%22%3A%7B%22isWithdrawCashJPEnabled%22%3Atrue%2C%22isClientRenewalEnabled%22%3Atrue%2C%22isInsightsEnabled%22%3Atrue%2C%22isTradingConditionsEnabled%22%3Atrue%2C%22isPriceAlertsEnabled%22%3Atrue%2C%22isAutoTradingAllowed%22%3Atrue%2C%22isGuidedManagedPortfolioEnabled%22%3Atrue%2C%22isRealTimeNettingSupported%22%3Atrue%2C%22isCostCalculatorEnabled%22%3Atrue%2C%22isTradeSignalsSupported%22%3Atrue%2C%22isSitecoreConfigEnabled%22%3Atrue%2C%22isFundingOptionsEnabled%22%3Atrue%7D%7D")
  cy.window({ timeout: 20000 }).should('have.property', 'appReady', true)
  cy.window().then((win) => {
    win.renderApp({})
  })

  // if you set this to false `yarn test` will not hang
  const breakCypress =  true;
  if (breakCypress) {
    get('[data-test-id="instrument-search-textbox"]')
    get('[data-test-id="navbar"]').contains('Trading').trigger('tap');
    get('[data-id="2"]').should('be.visible').click();
    get('[data-test-id="tst-btn-cardcarousel-moreactions"]').should('be.visible').click();
    get('[data-test-id="tst-action-menu"] .tst-chart').click();
  }

  get('[data-test-id="open-positions"]').trigger('tap');
  get('[data-test-id="watchlist"]').trigger('tap', { force: true });
  get('[data-id="2"]').should('be.visible').click();
  get('[data-test-id="tst-btn-cardcarousel-moreactions"]').should('be.visible').click();
  get('[data-test-id="tst-action-menu"] .tst-tradingconditions').click();
  get('[data-test-id="saxoselect-portfolios"]').should('be.visible');
})
