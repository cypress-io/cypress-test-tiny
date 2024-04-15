#!/usr/bin/env node
const cypress = require('cypress')

cypress.run({
  reporter: 'junit',
  browser: 'chrome',
  spec: './cypress/e2e/spec.cy.js',
  config: {
    baseUrl: 'https://share.vidyard.com',
    video: true,
  }
}).then(results => {
  console.log('results!')
}).catch(err => {
  console.err(err)
}).finally(() => {
  process.exit()
})