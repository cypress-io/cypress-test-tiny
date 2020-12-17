/// <reference types="cypress" />
describe('page', () => {
  for (let i = 0; i < 10; i++) {
    it(`test ${i}`, { retries: 4 }, () => {
      expect(true).to.be.false
    })
  }
})
