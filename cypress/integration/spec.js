it('calls cy get with 2 strings', () => {
  // TypeError: Cannot read property 'set' of undefined
  cy.get('.foo', 'bar')
})
it('calls cy get with string and number', () => {
  // TypeError: Cannot read property 'set' of undefined
  cy.get('.foo', 42)
})
it('calls cy get with string and a function', () => {
  // works (no warnings)
  cy.get('.foo', () => {})
})
it('calls cy get with string and empty object', () => {
  // works
  cy.get('.foo', {})
})
