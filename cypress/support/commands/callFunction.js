/**
 * When we get objects that are used in assertions, there is a memory leak on these objects
 * and it causes the window to be kept in memory. To combat this, we stringify and parse the object,
 * which recreates the objects/arrays/strings in this window so we do not have a link to the target
 * window
 */
export const cloneToThisWindow = (obj) => {
    if (obj == null) {
        return obj;
    }
    if (typeof obj.then === 'function') {
        return obj;
    }

    return JSON.parse(JSON.stringify(obj));
};

// add directly so it retries
cy.callFunction = (fnName, ...args) => {
    return cy
        .window({ log: false })
        .pipe((win) => cloneToThisWindow(win[fnName](...args)), { log: false });
};

cy.callFunctionOnce = (fnName, ...args) => {
    return (
        cy
            .window({ log: false })
            // long timeout for things like renderModule. Because this doesn't retry, a long timeout
            // is unlikely to ever cause delays
            .then({ log: false, timeout: 20000 }, (win) =>
                cloneToThisWindow(win[fnName](...args)),
            )
    );
};
