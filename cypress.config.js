module.exports = {
  projectId: "a14ir1",
  e2e: {
    setupNodeEvents(on, config) {},
    hosts: {
      'first.domain.test': '127.0.0.1',
      'second.domain.test': '127.0.0.1',
      'third.domain.test': '127.0.0.1',
    }
  },
}
