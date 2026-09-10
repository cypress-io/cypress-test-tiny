const startServer = require('./server')

module.exports = {
  // a missing client cert manifests as a hang; fail fast instead of waiting 60s
  pageLoadTimeout: 10000,
  e2e: {
    supportFile: false,
    // paths MUST be relative — packages/config/src/validation.ts rejects absolute ones
    clientCertificates: [
      {
        url: 'https://localhost:8443',
        ca: ['certs/ca.crt'],
        certs: [
          {
            cert: 'certs/client.crt',
            key: 'certs/client.key',
          },
        ],
      },
    ],
    setupNodeEvents (on) {
      const server = startServer()

      on('after:run', () => new Promise((resolve) => server.close(resolve)))
    },
  },
}
