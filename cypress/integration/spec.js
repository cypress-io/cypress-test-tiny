/// <reference types="cypress" />
function Foo () {
  if (!new.target) {
    console.log('Foo was called without new!')
    return
  }
  console.log('inside Foo constructor')
}
window.Foo = Foo

it('stubs the constructor', () => {
  cy.stub(window, 'Foo')
  const f = new window.Foo()
  // new automatically converts whatever stub returns into an empty object
  expect(f).to.deep.equal({})
})

it('spies on constructor', () => {
  cy.spy(window, 'Foo').as('Foo')
  const f = new window.Foo()
  cy.get('@Foo').should('have.been.calledOnce')
})

// causes an error
it('spies on Notification', () => {
  cy.spy(window, 'Notification').as('Notification')
  const f = new Notification('Hello')
})

// workaround - spy on our wrapper of Notification
it('spies on Notification wrapper', () => {
  window.BrowserNotification = (text) => {
    return new Notification(text)
  }
  cy.spy(window, 'BrowserNotification').as('Notification')
  // actual notification will pop up (if Cypress notifications are enabled)
  const f = new BrowserNotification('Hello')
  cy.get('@Notification').should('have.been.calledOnce')
    .and('calledWithNew')
})
