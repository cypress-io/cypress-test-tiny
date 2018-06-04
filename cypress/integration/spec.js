describe('page', () => {
  it('works', () => {})
  it('has named screenshot', () => {
    cy.screenshot('an image')
  })
  it('has unnamed screenshot', () => {
    cy.screenshot()
  })
  it.skip('does not work', () => {
    throw new Error('this test fails on purpose')
  })
  it('takes longer than 1 second', () => {
    cy.wait(1000)
  })
})
