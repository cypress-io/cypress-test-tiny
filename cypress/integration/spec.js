/// <reference types="cypress" />
describe('todo list', () => {
  it('add long todo', () => {
    cy.visit('https://example.cypress.io/todo')
      const newItem = 'Feed the cat'
      const newItem2 = 'HELLO do I work as expected?!'
      const randomStringWithCaps = 'ADJSHFUIYRHEFJBKJVBJ'
  
      cy.get('[data-test=new-todo]').type(`${newItem}{enter}`)
      cy.get('[data-test=new-todo]').type(`${newItem2}{enter}`)
      cy.get('[data-test=new-todo]').type(`${randomStringWithCaps}{enter}`)
      cy.get('[data-test=new-todo]').type(`${randomStringWithCaps}{enter}`)
  
      cy.get('.todo-list li')
      .should('have.length', 6)
      .last()
      .should('have.text', randomStringWithCaps)
  })
})
