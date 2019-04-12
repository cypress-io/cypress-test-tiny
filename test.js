const cypress = require('cypress')
cypress.run({
  // this works fine
  // spec: 'cypress/integration/spec.js'
  // this crashes badly - hanging Cypress
  spec: {}

  /*
    this exits because no specs were found
    Can't run because no spec files were found.
    We searched for any files matching this glob pattern:
  */
  // spec: []
})
