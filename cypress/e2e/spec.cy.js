// https://github.com/cypress-io/cypress/issues/25056
describe("issue 25056", () => {
    describe(`verify with full-page.html`, () => {
      beforeEach(() => {
        cy.visit(`cypress/fixtures/full-page.html`)
      })

      // 1. page scrolls during test
      it("t1 - default mouse down", () => {
        cy.wait(1000)
        cy.get("#test")
        .trigger("mousedown")
      })

      // 2. - page is fine during test
      //    - get snapshot scrolls page and not restored after un-pinning snapshots
      it("t2 - no element interactions", () => {
        cy.wait(1000)
        cy.get("#test")
      })

      // 3. - page is fine during test
      //    - get and/or mousedown snapshot scrolls page and not restored after un-pinning snapshots
      it.only("t3 - no scroll when mousedown", () => {
        cy.wait(1000)
        cy.get("#test")
        .trigger("mousedown", { scrollBehavior: false })
      })
    })

  // these seem to work as expected
  describe.skip(`verify with small-element.html`, () => {
    beforeEach(() => {
      cy.visit(`cypress/fixtures/small-element.html`)
    })

    // 1. page does not scroll during test
    it("t1 - default mouse down", () => {
      cy.wait(1000)
      cy.get("#test")
      .trigger("mousedown")
    })

    // 2. - page is fine during test
    //    - get  snapshot does not scroll page and restores after un-pinning snapshots
    it("t2 - no element interactions", () => {
      cy.wait(1000)
      cy.get("#test")
    })

    // 3. - page is fine during test
    //    - get and/or mousedown snapshot does not scroll page and restores after un-pinning snapshots
    it("t3 - no scroll when mousedown", () => {
      cy.wait(1000)
      cy.get("#test")
      .trigger("mousedown", { scrollBehavior: false })
    })
  })
})