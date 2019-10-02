// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your other test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/guides/configuration#section-global
// ***********************************************************

// Import commands.js and defaults.js
// using ES2015 syntax:
import "./commands"
import "./defaults"
const baseUrl = "www.google.com"

Cypress.Commands.add('login', () => {
    // The promise gets ignored - the program doesn't wait 5s
    new Cypress.Promise((resolve) => { 
      setTimeout(() => {
        resolve();
      }, 5000);
    });
  
    cy.visit(baseUrl);
  });
  
  Cypress.Commands.add('login', () => {
    // Throws an error
    return new Cypress.Promise((resolve) => { 
      setTimeout(() => {
        cy.visit(baseUrl);
        resolve();
      }, 5000);
    });
  });

// Alternatively you can use CommonJS syntax:
// require("./commands")
// require("./defaults")
