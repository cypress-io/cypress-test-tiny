const fs = require('node:fs')
const { startServer, PORT } = require('./server')

const median = (xs) => {
  const s = [...xs].sort((a, b) => a - b)

  return s.length ? s[Math.floor(s.length / 2)] : NaN
}

module.exports = {
  // Pass --config forceHttp1=true to compare against the proxy network path.
  e2e: {
    setupNodeEvents (on, config) {
      startServer()
      config.baseUrl = `http://localhost:${PORT}`

      on('task', {
        noop: () => null,
        report ({ label, samples }) {
          const byPhase = {}

          for (const { phase, ms } of samples) {
            (byPhase[phase] ||= []).push(ms)
          }

          console.log(`\n[issue-35209] ${label}`)
          for (const [phase, xs] of Object.entries(byPhase)) {
            console.log(`  cy.task ${phase.padEnd(12)} n=${xs.length} median=${median(xs).toFixed(1)}ms min=${Math.min(...xs).toFixed(1)}ms max=${Math.max(...xs).toFixed(1)}ms`)
          }

          fs.writeFileSync(`task-timings-${label}.json`, JSON.stringify(samples, null, 2))

          return null
        },
      })

      return config
    },
  },
}
