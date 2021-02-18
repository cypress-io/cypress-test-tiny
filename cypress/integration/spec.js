/// <reference types="cypress" />
Cypress.on('test:before:run', () => {
  const server = cy.state('server')
  server.getProxyFor = (xhr) => {
    xhr._setRequestBody = () => { }
    xhr._getXhr = () => {}
    return xhr
  }
})

it("Sample error when XHR id is not available - not working", () => {
  cy.server()
  cy.route("GET", "/api/myService").as("myService");
  cy.visit("https://cy-test-page.uc.r.appspot.com");
  // does not work, since we break book-keeping
  // cy.wait("@myService");
  cy.get("#response").should("contain", `{"working":true}`);
});

it("Sample error when XHR id is not available", () => {
  cy.intercept("GET", "/api/myService").as("myService");
  cy.visit("https://cy-test-page.uc.r.appspot.com");
  cy.wait("@myService");
  cy.get("#response").should("contain", `{"working":true}`);
});
