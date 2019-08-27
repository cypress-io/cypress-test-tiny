# cypress-test-tiny

> Tiny Cypress E2E test case

Build status | Name | Description
:--- | :--- | :---
[![CircleCI](https://circleci.com/gh/cypress-io/cypress-test-tiny.svg?style=svg)](https://circleci.com/gh/cypress-io/cypress-test-tiny) | CircleCI | Linux & Mac & Win 64
[![Build status](https://ci.appveyor.com/api/projects/status/er7wpte7j00fsm8d/branch/master?svg=true)](https://ci.appveyor.com/project/cypress-io/cypress-test-tiny-fitqm/branch/master) | AppVeyor | Windows 32-bit
[![Build status](https://ci.appveyor.com/api/projects/status/bpwo4jpue61xsbi5/branch/master?svg=true)](https://ci.appveyor.com/project/cypress-io/cypress-test-tiny/branch/master) | AppVeyor | Windows 64-bit
[ ![Codeship Status for cypress-io/cypress-test-tiny](https://app.codeship.com/projects/98843020-d6d6-0135-402d-5207bc7a4d86/status?branch=master)](https://app.codeship.com/projects/263289) | Codeship Basic | Linux Docker

## Important

Note that this project **DOES NOT** include Cypress dependency in the [package.json](package.json). The reason for such omission is that we use this project to test every Cypress build and do not want to spend time installing `cypress@x.x.x` just to immediately install and test `cypress@y.y.y`. Which means when submitting pull requests with a bug report, please save the problematic version of Cypress in `package.json`. Simply run `npm install --save-dev cypress` or `npm i -D cypress@x.x.x` and commit the change before submitting a pull request.
