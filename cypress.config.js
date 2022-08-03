module.exports = {
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      require('./cypress/plugins')
    },
  },
}
