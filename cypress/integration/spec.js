import SwaggerPetstore from 'test-petstore-service/api-client/src/api/PetApi'

/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    const pet = new SwaggerPetstore.Pet();
    cy.log(pet)
    cy.visit('https://example.cypress.io')
  })
})
