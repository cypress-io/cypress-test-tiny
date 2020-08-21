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

    cy.waitForTimers({ log: false });
    return existingCyGet(selectorOrAlias, options);
};
