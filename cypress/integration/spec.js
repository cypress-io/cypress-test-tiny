/// <reference types="cypress" />
describe('suite', { env: {var1: 'var1', var2: 'var2'} }, () => {
  it('merges env objects', { env: {var1: 'test1', var3: 'var3'} }, () => {
    expect(Cypress.env(), 'has env keys from all objects')
      .to.include.keys(['var1', 'var2', 'var3'])
  })
})
