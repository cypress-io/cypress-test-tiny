describe('ampersand', () => {
  const createTodo = text => {
    cy.get('#new-todo').type(`${text}{enter}`)
  }
  const createDefaultTodos = () => {
    createTodo('foo')
    createTodo('bar')
    createTodo('baz')
  }
  const visibleTodos = () => cy.get('#todo-list li:visible')

  beforeEach(() => {
    cy.visit('ampersand/index.html')
    // let app start
    cy.wait(1000)
  })
  it('edits todo', () => {
    createDefaultTodos()
    // let everything settle
    cy.wait(1000)

    visibleTodos()
      .eq(1)
      .find('label')
      .dblclick()

    // clear out the inputs current value
    // and type a new value
    visibleTodos()
      .eq(1)
      .find('.edit')
      .should('have.value', 'bar')
      .clear()
      .type('buy some sausages{enter}')
    cy.wait(1000)

    // confirm that new value is in localStorage
    cy
      .window()
      .its('localStorage')
      .its('todos-ampersand')
      .then(JSON.parse)
      .should('have.length', 3)
      .its('1')
      .its('title')
      .should('equal', 'buy some sausages')
  })
})
