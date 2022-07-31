const shouldNotExecute = () => {
  throw new Error('Test Override validation should have failed & it block should not have executed.')
}

Cypress.on('test:before:run', () => {
  console.log('test:before:run....throw an error')
  throw new Error('Test Override validation should have failed & it block should not have executed.')
})


it('does not run', () => {
  shouldNotExecute()
})

describe('nested', () => {
  it('does not run 2', () => {
    shouldNotExecute()
  })
})
