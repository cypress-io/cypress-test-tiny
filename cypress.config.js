const { start } = require('./servers')

module.exports = {
  e2e: {
    baseUrl: 'http://localhost:3100',
    video: false,
    retries: 0,
    supportFile: false,
    setupNodeEvents (on) {
      const stop = start()

      on('after:run', () => stop())
    },
  },
}
