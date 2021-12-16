/// <reference types="cypress" />

// All tests should pass

describe("page", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io");
    delayedHelloAfter(7);
  });

  it("`get` retries using the defaultTimeout so this test fails (good)", () => {
    cy.get("body").should("contain", "Hello");
  });

  it("`get` respects the `timeout` option so this test passes (good)", () => {
    cy.get("body", { timeout: 10000 }).should("contain", "Hello");
  });

  it("`get` does not respect the `defaultCommandTimeout` changed via `config` so this fails (bad)", () => {
    Cypress.config("defaultCommandTimeout", 10000);
    cy.get("html").should("contain", "Hello");
  });

  it("This form should be equivalent to the previous one, but passes (good)", () => {
    Cypress.config("defaultCommandTimeout", 10000);
    cy.get("html", {
      timeout: Cypress.config().defaultCommandTimeout,
    }).should("contain", "Hello");
  });
});

function delayedHelloAfter(seconds) {
  cy.window().then((w) => {
    w.eval(`setTimeout(() => {
        document.querySelector('.banner .container').innerHTML = '<p> Hello, world!</p>'
      }, ${seconds} * 1000)
      console.log("ok")
      `);
  });
}
