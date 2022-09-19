/// <reference types="cypress" />

// Our documentation states the default domain should be `window.location.hostname`
// Which would exclude the `my_cookie` from being sent to another subdomain.
// The actual domain set is the superdomain `.cypress.io` which allows the cookie to be
// sent
it("sub-domain cookie", () => {
  cy.visit("https://docs.cypress.io/api/commands/setcookie");
  cy.setCookie("my_cookie", "is_really_tasty", {});
  cy.request("https://dashboard.cypress.io/").then((res) => {
    expect(res.requestHeaders.cookie).not.include("my_cookie=is_really_tasty");
  });
});

// Forcing `domain = window.location.hostname` and we no longer see the `my_cookie`
// in the request
it("sub-domain cookie when using domain=window.location.hostname", () => {
  cy.visit("https://docs.cypress.io/api/commands/setcookie");
  cy.setCookie("my_cookie", "dismiss", {
    domain: window.location.hostname,
  });
  cy.request("https://dashboard.cypress.io/").then((res) => {
    expect(res.requestHeaders.cookie).not.include("my_cookie=is_really_tasty");
  });
});
