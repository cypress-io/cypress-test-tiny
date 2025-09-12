it("Just a test", () => {
  cy.prompt([
    "Visit https://cloud.cypress.io/login",
    "Log in via email",
    "Enter email 'myemail@email.com'",
    "Enter password 'my-password'",
    "Click on login"
  ]);
});
