/// <reference types="cypress" />
describe('page', () => {
  it('works', () => {
    // run the test in chrome
    // open browser and check console
    // it throw error 
    // Refused to load the script 'https://www.google.com/recaptcha/enterprise.js?render=123&render=explicit' because it violates the following Content Security Policy directive: "script-src 'unsafe-eval'". Note that 'script-src-elem' was not explicitly set, so 'script-src' is used as a fallback.
    var scr  = document.createElement('script'),

        head = document.head || document.getElementsByTagName('head')[0];
        head.appendChild(scr)
        scr.src = 'https://www.google.com/recaptcha/enterprise.js?render=123&render=explicit';
  })
})
