describe("exec environment", () => {
  it("should not set NODE_ENV to `'undefined'`", () => {
    cy
      .exec("echo $NODE_ENV")
      .its("stdout")
      .should("eq", "");
  });

  it("should behave like this for NODE_ENV", () => {
    cy
      .exec("echo $RANDOM_UNDEFINED_VAR")
      .its("stdout")
      .should("eq", "");
  });
});
