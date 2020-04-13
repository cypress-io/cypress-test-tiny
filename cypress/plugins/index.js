// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)
// const { GoogleSocialLogin } = require('cypress-social-logins').plugins; // this old ES5 code would work
// but the following ES6 import wouldn't work - that is a bug I think
import GoogleSocialLogin from 'cypress-social-logins';

module.exports = (on, config) => {
  on('task', {
    GoogleSocialLogin: GoogleSocialLogin,
  });
};
