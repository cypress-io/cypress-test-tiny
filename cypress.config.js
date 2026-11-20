const { start, PORT } = require('./server')

module.exports = {
  // FORCE_HTTP1=1 applies the reporter's workaround (legacy network path).
  forceHttp1: process.env.FORCE_HTTP1 === '1',
  e2e: {
    baseUrl: `http://localhost:${PORT}`,
    supportFile: false,
    video: false,
    retries: 0,
    setupNodeEvents (on) {
      const stop = start()

      on('task', {
        log (message) {
          // eslint-disable-next-line no-console
          console.log(`[spec] ${message}`)

          return null
        },
      })

      on('before:browser:launch', (browser, options) => {
        if (browser.family === 'chromium') {
          options.args.push('--use-mock-keychain', '--password-store=basic')
        }

        return options
      })

      on('after:run', () => stop())
    },
  },
}
