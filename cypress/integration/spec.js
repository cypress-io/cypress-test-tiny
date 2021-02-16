/// <reference types="cypress" />
describe("Connetti al db", () => {

    it("crea una connessione", () => {
        cy.task('log', 'messaggio')
    });
})
