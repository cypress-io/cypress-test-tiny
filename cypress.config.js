const { defineConfig } = require('cypress')

const PORT = 3443
const ADMIN_HOST = 'admin.something.test'
const DASHBOARD_HOST = 'dashboard.something.test'

module.exports = defineConfig({
  hosts: {
    [ADMIN_HOST]: '127.0.0.1',
    [DASHBOARD_HOST]: '127.0.0.1',
  },
  env: {
    adminUrl: `https://${ADMIN_HOST}:${PORT}`,
    dashboardUrl: `https://${DASHBOARD_HOST}:${PORT}`,
  },
  e2e: {
    setupNodeEvents(on, config) {},
  },
})
