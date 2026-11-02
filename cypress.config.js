const { startServer, PORT } = require('./server')

module.exports = {
  e2e: {
    baseUrl: `http://localhost:${PORT}`,
    async setupNodeEvents (on, config) {
      await startServer()

      return config
    },
  },
}
