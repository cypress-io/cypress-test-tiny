// overwrite cy.get to call waitForTimers when its called  directly
// e.g.
// cy.get().get().click(); // calls waitForTimers once
// this ensures that all timers have run and dom updates are complete before getting elements
// we don't use cypress overwrite because its difficult with cypress to overwrite child commands
// and logging wise you end up with get being prefixed with - or not being visible.
// The below is simpler.

const existingCyGet = cy.get;

cy.get = function (selectorOrAlias, options) {
  if (this !== cy) {
    return existingCyGet.call(this, selectorOrAlias, options);
  }

  cy.window().then(
    (win) =>
      new Promise((resolve) => {
        // we occasionally get timeouts here, probably caused by the complexities of mocking some time
        // and not other time.
        // The page itself can't do a timeout since it cannot get a reliable timer.
        // If we use cypress timeout then the test will fail.
        // so we timeout here and move on
        let isTimedOut = false;
        let timeoutTimer;
        win.getPromiseForTimersToComplete().then(() => {
          if (!isTimedOut) {
            clearTimeout(timeoutTimer);
            resolve();
          }
        });
        timeoutTimer = setTimeout(() => {
          isTimedOut = true;
          resolve();
        }, 7000);
      }),
  );
  return existingCyGet(selectorOrAlias, options);
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
    cy.get('[data-test-id="instrument-search-textbox"]')
    cy.get('[data-test-id="navbar"]').contains('Trading').trigger('tap');
    cy.get('[data-id="2"]').should('be.visible').click();
    cy.get('[data-test-id="tst-btn-cardcarousel-moreactions"]').should('be.visible').click();
    cy.get('[data-test-id="tst-action-menu"] .tst-chart').click();
  }

  cy.get('[data-test-id="open-positions"]').trigger('tap');
  cy.get('[data-test-id="watchlist"]').trigger('tap', { force: true });
  cy.get('[data-id="2"]').should('be.visible').click();
  cy.get('[data-test-id="tst-btn-cardcarousel-moreactions"]').should('be.visible').click();
  cy.get('[data-test-id="tst-action-menu"] .tst-tradingconditions').click();
  cy.get('[data-test-id="saxoselect-portfolios"]').should('be.visible');
})
