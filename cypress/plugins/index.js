// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
// const browserify = require('@cypress/browserify-preprocessor')

console.log('plugins file Node version %s', process.version)

module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  console.log('plugins file on, Node version %s', process.version)

  on('task', {
    test () {
      console.log('plugins file task test, Node version %s', process.version)

      return null
    }
  })

  on('file:preprocessor', file => {
    console.log(
      'file:preprocessor file %s Node version %s',
      file.filePath,
      process.version
    )

    return Promise.resolve(file.filePath)
  })
}
