import { When } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
  throw new Error('intended')
  cy.visit("https://example.cypress.io");
});

afterEach(() => {
  cy.readFile('Sample-png-image-200kb.png').then(res => {
    debugger
  })
})
