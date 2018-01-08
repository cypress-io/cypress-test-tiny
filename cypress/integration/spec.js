describe('page', () => {
  it('works', () => {})

  it('exec', () => {
    cy
      .exec('echo foo')
      .its('stdout')
      .should('contain', 'foo')
  })
})
