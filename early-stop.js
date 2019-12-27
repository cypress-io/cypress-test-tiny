// exits with 1 if the last commit subject includes a given string
// $ node ./early-stop.js foo

// examples using this script with "|| <some other command>"
//
//  1) failed to find substring
//  $ node ./early-stop "foo" || echo "yes"
//  cannot find string "foo" in commit subject "trying a node script on Window
//
//  2) finds substring
//  $ node ./early-stop "foo" && echo "yes"
//  cannot find string "foo" in commit subject "trying a node script on Windows
//  yes

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
    console.log('cannot find string "%s" in commit subject "%s"', substring, subject)
  }
})
