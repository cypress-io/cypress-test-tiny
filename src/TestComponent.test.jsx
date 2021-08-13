it("should call window:before:load", () => {
  const beforeLoadStub = cy.stub().as("beforeLoadStub");
  cy.on("window:before:load", (win) => {
    console.log("#######################", win);
    beforeLoadStub();
  });
  cy.wrap({ moo: true }).its("moo").should("equal", true);
  cy.get("@beforeLoadStub").should("have.been.called");
});
