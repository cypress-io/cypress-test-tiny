// exits with 1 if the last commit subject includes a given string
// $ node ./early-stop.js foo

const util = require('util')
const exec = util.promisify(require('child_process').exec)
const substring = process.argv[2]
if (!substring) {
  throw new Error('Expected: string to find in the commit subject')
}

exec('git show -s --pretty=%s').then(result => {
  const subject = result.stdout.trim()
  if (subject.includes(substring)) {
    console.log('found "%s" in commit subject "%s"', substring, subject)
    process.exit(1)
  } else {
    console.log('cannot find string "%s" in commit subject "%s', substring, subject)
  }
})
