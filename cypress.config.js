export default {
  e2e: {
    setupNodeEvents(on, config) {},
    experimentalOriginDependencies: true,
  },
  hosts: {
    '*.origin.com': '127.0.0.1',
  }
}
