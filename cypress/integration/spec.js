/// <reference types="cypress" />

// All tests should pass

describe("page", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io");
    delayedHelloAfter(7);
  });

  it("`root` retries using the default so this test fails (good)", () => {
    cy.root().should("contain", "Hello");
  });

  it("`root` does not respect the `timeout` options so this test fails too (bad)", () => {
    cy.root({ timeout: 10000 }).should("contain", "Hello");
  });
  it("get('html') does respect the `timeout` options so this test passes (good)", () => {
    cy.get("html", { timeout: 10000 }).should("contain", "Hello");
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
