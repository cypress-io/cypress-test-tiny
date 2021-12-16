/// <reference types="cypress" />

// All tests should pass

describe("page", () => {
  beforeEach(() => {
    cy.visit("https://example.cypress.io");
    writeHelloAfter1s();
  });

  it("`root` inside a `within` should retry but doesn't (bug)", () => {
    cy.get("body").within(() => {
      cy.root().should("contain", "Hello");
    });
  });

  it("`root` outside any `within` does retry (good)", () => {
    cy.root().should("contain", "Hello");
  });

  it("`get` inside a `within` does retry (good)", () => {
    cy.get("body").within(() => {
      cy.get(".banner:first").should("contain", "Hello");
    });
  });

  it("`root` inside a `within` with a `then` does retry (good)`", () => {
    cy.get("body").within(() => {
      cy.root().then(($body) => cy.wrap($body).should("contain", "Hello"));
    });
  });
});

function writeHelloAfter1s() {
  cy.window().then((w) => {
    w.eval(`setTimeout(() => {
        document.querySelector('.banner .container').innerHTML = '<p> Hello, world!</p>'
      }, 1000)
      console.log("ok")
      `);
  });
}
