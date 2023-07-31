const express = require('express');
// once published, this will be something like require('@cypress/multitab')
const setupMultitab = require('./cypress/plugins/multitab')

const port = 3000

module.exports = {
  e2e: {
    baseUrl: `http://localhost:${port}`,
    setupNodeEvents(on) {
      const app = express()

      app.set('view engine', 'html')
      app.use(express.static('public'))

      app.listen(port, () => {
        console.log(`Listening on http://localhost:${port}`)
      })

      setupMultitab(on)
    },
  },
};
