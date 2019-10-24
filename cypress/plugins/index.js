const task = require('cypress-skip-and-only-ui/task')
module.exports = (on, config) => {
  on('task', task)
}
