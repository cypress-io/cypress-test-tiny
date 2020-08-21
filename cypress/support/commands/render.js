import { isJSONRequest } from '../utils';

const { _ } = Cypress;

function setupScenario(scenario) {
    if (!scenario) {
        return;
    }
    cy.window({ log: false }).then({ log: false, timeout: 30000 }, (win) => {
        if (typeof scenario === 'string' || scenario.isDataFactory !== false) {
            win.setScenario(scenario);
        } else {
            return win.waitForLegacyMocks().then(() => {
                const readyScenario = _.mapValues(scenario, (scenarioType, key) => {
                    if (key === 'isDataFactory') {
                        return scenarioType;
                    }
                    return _.mapValues(scenarioType, (result) => {
                        if (_.isArray(result)) {
                            return _.map(result, (resultItem) => ({
                                ...resultItem,
                                response: isJSONRequest(resultItem.response)
                                    ? win.getMockedResponse(resultItem.response)
                                    : resultItem.response,
                            }));
                        }

                        return {
                            ...result,
                            response: isJSONRequest(result.response)
                                ? win.getMockedResponse(result.response)
                                : result.response,
                        };
                    });
                });

                win.setScenario(readyScenario);
            });
        }
    });
}


Cypress.Commands.add('setScenario', (scenario) => {
    Cypress.log({
        name: 'setScenario',
        displayName: 'Set Scenario',
        message: '',
    });

    setupScenario(scenario);
});

Cypress.Commands.add('renderApp', (options = {}) => {
    Cypress.log({
        name: 'renderApp',
        displayName: 'Render App',
        message: '',
    });

    const { scenario, ...renderOptions } = options;

    setupScenario(scenario);

    cy.callFunctionOnce('renderApp', renderOptions);
});

Cypress.Commands.add('unmount', () => {
    Cypress.log({
        name: 'unmount',
        displayName: 'Unmounting module',
        message: '',
    });

    cy.callFunctionOnce('unmount');
});
