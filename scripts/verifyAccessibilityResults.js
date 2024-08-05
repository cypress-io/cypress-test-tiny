const { getAccessibilityResults } = require('@cypress/extract-cloud-results')

getAccessibilityResults({
  // runTags: [process.env.CYPRESS_RUN_TAG],
})
  .then((report) => {
    console.log('POC - verifyAccessibilityResults received data', report)

    const violationCountTotal = report?.summary?.violationCounts?.total
    const maxAllowedViolations = process.env.MAXIMUM_A11Y_VIOLATION_COUNT || 0

    console.log(`POC - Maximum allowed violations is ${maxAllowedViolations}`)

    if (violationCountTotal > maxAllowedViolations) {
      console.log(
        `POC - Failing job with violation count ${violationCountTotal}`
      )
      process.exitCode = 1
    } else {
      console.log(
        `POC - Accessibility report passes validation with ${violationCountTotal} total violations`
      )
    }
  })
  .catch((e) => {
    // Error occurred
    console.log(
      `POC - received error from getAccessibilityResults and failing job`
    )
    console.log(e.message)
    process.exitCode = 1
  })
