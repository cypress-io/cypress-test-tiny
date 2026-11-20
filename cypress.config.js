const { startServer, PORT } = require('./server')

module.exports = {
  // Uncomment to use the proxy network path, which avoids the hang.
  // forceHttp1: true,
  e2e: {
    setupNodeEvents(on, config) {
      startServer()
      config.baseUrl = `http://localhost:${PORT}`

      return config
    },
  },
}
