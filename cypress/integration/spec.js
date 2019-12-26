describe("valid regexes containing an apostrophe", () => {
  it("should not break contains", () => {
    cy.visit("/index.html");
    cy.get("p").contains(/shouldn't/);
  });
});
