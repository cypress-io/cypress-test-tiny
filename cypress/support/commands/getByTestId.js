const { _ } = Cypress;

const isSelectorRegex = /(^(\.|\[|:))|^input$/i;

cy.getByTestId = (...idsOrSelectors) => {
    const selector = _.map(idsOrSelectors, (idOrSelector) =>
        idOrSelector.match(isSelectorRegex)
            ? idOrSelector
            : `[data-test-id="${idOrSelector}"]`,
    ).join(' ');

    return cy.get(selector);
};
