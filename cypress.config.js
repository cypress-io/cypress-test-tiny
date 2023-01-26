module.exports = {
  e2e: {
    baseUrl: 'http://localhost:3500',
    experimentalSessionAndOrigin: true,
    setupNodeEvents() {
      return require('./cypress/support/server')
    }
  },
}
