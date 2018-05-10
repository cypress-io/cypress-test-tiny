const cypress = require('cypress')
const Promise = require('bluebird')

const glob = Promise.promisify(require('glob'))

const started = new Date()
let numFailed = 0

let k = 1

const runSpec = (spec) => {
  console.log('\nRunning %d spec:', k, spec)
  k += 1

  const opts = {
    // headed: true,
    spec,
  }

  process.env.DEBUG = process.env.DEBUG || 'cypress:*'

  if (process.env.CI) {
    opts.record = false
    opts.key = process.env.CYPRESS_DASHBOARD_KEY
  }

  return cypress.run(opts).then(results => {
    if (results.failures) {
      numFailed += results.failures

      return results
    }
    return runSpec(spec)
  })
}

return glob('cypress/integration/**/*', {
  nodir: true,
  realpath: true,
  ignore: '**/*example.js'
})
.tap((specs) => {
  console.log('Found ', specs.length, ' specs:\n\n', specs)
})
.mapSeries(runSpec)
.then(() => {
  const duration = new Date() - started

  console.log('\n--All Done--\n')
  console.log('Total duration:', duration) // format this however you like
  console.log('Exiting with final code:', numFailed)

  process.exit(numFailed)
})
.catch((err) => {
  console.error(err)
  throw err
})
