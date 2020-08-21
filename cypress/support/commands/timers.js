let dateToSet;
let isPaused = false;
let pauseCalls = 0;
beforeEach(() => {
    dateToSet = undefined;
    isPaused = false;
    pauseCalls = 0;
});

export const getHashData = () => {
    if (isPaused || dateToSet) {
        return `#paused=${String(Boolean(isPaused))}${
            dateToSet ? `&date=${Number(dateToSet)}` : ''
        }`;
    }
    return '';
};

Cypress.Commands.add('pauseDate', (options = {}) => {
    if (options.log !== false) {
        Cypress.log({
            name: 'pauseDate',
            displayName: 'Pause Date',
            message: '',
        });
    }

    isPaused = true;

    pauseCalls++;

    cy.window({ log: false }).then(
        { log: false },
        (win) => win.pauseDate && win.pauseDate(),
    );
});

Cypress.Commands.add('resumeDate', (options = {}) => {
    if (options.log !== false) {
        Cypress.log({
            name: 'resumeDate',
            displayName: 'Resume Date',
            message: '',
        });
    }

    pauseCalls--;

    if (pauseCalls > 0) {
        return;
    }
    if (pauseCalls < 0) {
        throw new Error(
            'cy.resumeDate is called but there is no matching call to cy.pauseDate',
        );
    }

    cy.callFunctionOnce('resumeDate');
});

Cypress.Commands.add('setDate', (date, options = {}) => {
    if (options.log !== false) {
        Cypress.log({
            name: 'setDate',
            displayName: 'Set Date',
            message: date,
        });
    }

    dateToSet = date;

    cy.window({ log: false }).then(
        { log: false },
        (win) => win.setDate && win.setDate(Number(date)),
    );
});

Cypress.Commands.add('tickDate', (time, options = {}) => {
    if (options.log !== false) {
        Cypress.log({
            name: 'tickDate',
            displayName: 'Tick Date',
            message: time,
        });
    }

    cy.callFunctionOnce('tickDate', time);
});

Cypress.Commands.add('advanceLongRunningTimers', (time, options = {}) => {
    if (options.log !== false) {
        Cypress.log({
            name: 'advanceLongRunningTimers',
            displayName: 'Advance Long Running Timers',
            message: time,
        });
    }

    cy.callFunctionOnce('advanceLongRunningTimers', time);
});

Cypress.Commands.add('waitForTimers', (options = {}) => {
    if (options.log !== false) {
        Cypress.log({
            name: 'waitForTimers',
            displayName: 'Wait For Timers',
            message: '',
        });
    }

    cy.window({ log: false }).then(
        { log: false },
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
                    Cypress.log({
                        name: 'waitForPageTimers (timeout)',
                        displayName: 'Timed out waiting for page timers, moving on',
                        message: '',
                    });
                    isTimedOut = true;
                    resolve();
                }, 7000);
            }),
    );
});

Cypress.Commands.add('waitForResource', (options = {}) => {
    // This is inspired by: https://www.artmann.co/articles/waiting-for-network-resources-in-cypress-c9cb5cca-b5d6-49df-bd30-c8c744bad147
    // It waits for resources such as link/script tags to have loaded before resuming cypress.
    const resourceCheckInterval = 25;
    if (options.log !== false) {
        Cypress.log({
            name: 'waitForResource',
            displayName: 'Wait For Resource',
            message: '',
        });
    }

    if (!options.resource) {
        throw new Error(
            'In order to use waitForResource command, resource option should be specified',
        );
    }

    cy.window({ log: false }).then(
        { log: false },
        (win) =>
            new Cypress.Promise((resolve) => {
                const checkIfResourceHasBeenLoaded = () => {
                    const resource = win.performance
                        .getEntriesByType('resource')
                        .find((entry) => entry.name.includes(options.resource));

                    if (resource) {
                        resolve();
                        return;
                    }

                    setTimeout(checkIfResourceHasBeenLoaded, resourceCheckInterval);
                };

                checkIfResourceHasBeenLoaded();
            }),
    );
});

const errOnUse = () => {
    throw new Error(
        'Do not use cypress cy.clock or cy.tick. See https://wiki/display/STGO/Mocking+Time+In+Cypress',
    );
};

cy.tick = errOnUse;
cy.clock = errOnUse;
