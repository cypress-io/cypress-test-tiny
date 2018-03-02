describe('loads github static page', () => {
  it('works for website that plays hydration tricks', () => {
    cy.visit('https://glebbahmutov.com')
  })

  it.skip('works for "normal" static site', () => {
    cy.visit('https://glebbahmutov.com/draw-cycle')
  })
})
