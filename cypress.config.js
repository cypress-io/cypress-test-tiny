const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          // auto open devtools
          // launchOptions.args.push('--crash')
          // launchOptions.args.push('--crash-test')

          // launchOptions.args.push('--enable-leak-detection')
          // launchOptions.args.push('--crash-on-failure')
          // launchOptions.args.push('--enable-crash-reporter')
          // --crash-on-hang-threads ⊗	Comma-separated list of BrowserThreads that cause browser process to crash if the given browser thread is not responsive. UI/IO are the BrowserThreads that are supported. For example: --crash-on-hang-threads=UI:18,IO:18 --> Crash the browser if UI or IO is not responsive for 18 seconds while the other browser thread is responsive. ↪
          // launchOptions.args.push('--crash-on-hang-threads=UI=60,IO=60')
          // launchOptions.args.push('--disable-features=OptimizationGuideModelDownloading,OptimizationHintsFetching,OptimizationTargetPrediction,OptimizationHints')
        }
        // whatever you return here becomes the launchOptions
        return launchOptions
      })
    }
  },
})
