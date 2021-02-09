const os = require('os');
module.exports = (on, config) => {
  config.env.testing_computer = os.hostname();
  console.log('config env is', config.env)
  return config;
}
