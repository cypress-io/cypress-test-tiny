const { start } = require('./servers')

module.exports = {
  projectId: 'i6pkqv',
  e2e: {
    baseUrl: 'http://localhost:3100',
    video: false,
    retries: 0,
    supportFile: false,
    setupNodeEvents (on) {
      const stop = start()

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
