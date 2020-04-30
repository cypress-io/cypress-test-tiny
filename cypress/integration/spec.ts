/// <reference types="cypress" />
import { forward } from '@apps/commons-e2e'

describe('TypeScript paths', () => {
  it('works', () => {
    expect(forward).to.be.true
  })
})
