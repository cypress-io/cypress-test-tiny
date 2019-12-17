/// <reference types="cypress" />
it('one should callback (works)', () => {
  cy.wrap(null)
    .should(() => {
      console.log('in should()')
      expect(true).to.be.true
      expect(true).to.be.true
    })
})

it('two should callbacks with 1 expect (works)', () => {
  cy.wrap(null)
    .should(() => {
      console.log('in should()')
      expect(true).to.be.true
    })
    .and(() => {
      console.log('in and ()')
    })
})

it('two should callbacks (crashes and burns)', () => {
  cy.wrap(null)
    .should(() => {
      console.log('in should()')
      expect(true).to.be.true
      expect(true).to.be.true
    })
    .and(() => {
      console.log('in and ()')
    })
})
