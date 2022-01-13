/// <reference types="cypress" />

// without the test config object the test correctly is set to pending status
// but with this test config object you get an exception trying to run it
/*
TypeError: fn.apply is not a function
  at Context.runnable.fn (http://localhost:53035/__cypress/runner/cypress_runner.js:172338:19)
  at callFn (http://localhost:53035/__cypress/runner/cypress_runner.js:125099:21)
  at Test.../driver/node_modules/mocha/lib/runnable.js.Runnable.run (http://localhost:53035/__cypress/runner/cypress_runner.js:125086:7)
*/
it('works', {viewportWidth: 100})
