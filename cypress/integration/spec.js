/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-cy="Insights-NoteEditor-Snippet"]').click();
  })
})
