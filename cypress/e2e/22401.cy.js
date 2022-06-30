describe("#22401", () => {
  // Notes:
  // Github issue: 

  // It appears the launcher/lib/browser is logging the browser instance error but does nothing to allow the 
  // server/lib/browsers instance to use it to connect to the browser-cri-client to connect to
  // the chrome-remote-interface to listen to events and handle opening the browser, launch tabs and
  // standardizing exiting/killing the browser instance consistently between electron/firefox/chrome/edge.
  // 
  // The server/lib/browsers/chrome instance does not appear to listen to crash/hang messages to either
  // close the tab and reopen it or to restart the browser instance to continue tests. Instead, Cypress hangs
  // and uses resources (having a running Cypress instance + crash Chrome instance that's been run for 20 hours now).
  // Because it is outside the scope of the mocha runner and we don't have logic to timeout due to Cypress hanging,
  // Cypress doesn't timeout itself. In CI it seems people manually kill the process or the CI instance
  // times out due to inactivity.
    
  // I have not tired to reproduce on firefox, but suspect we have a similar issue. Total shot in the dark,
  // but maybe the frequently observed Firefox is unable to connect issue. Maybe it is hanging and we aren't
  // capturing the message to properly kill and restart the instance.
  // Possible resource: https://github.com/bsmedberg/crashfirefox-intentionally

  // puppeteer handles by throwing a page crash error: https://github.com/puppeteer/puppeteer/blob/main/src/common/Page.ts#L598


  // How to crash chrome the browser
  //    https://stackoverflow.com/questions/40367087/how-to-crash-chrome-browser
  //    crash - chrome://crash
  //       cypress logs:
  //         cypress:launcher:browsers:chrome stderr: [79726:259:0629/122233.586969:ERROR:chrome_debug_urls.cc(173)] Intentionally crashing (with null pointer dereference) because user navigated to chrome://crash/
  //         cypress-verbose:server:browsers:cri-client:recv:[<--] received CRI message { method: 'Inspector.targetCrashed', params: {} }
  //    hang - chrome://hang
  //         cypress:server:browsers:chrome stderr: [32066:259:0630/090145.853211:ERROR:chrome_debug_urls.cc(199)] Intentionally hanging ourselves with sleep infinite loop because user navigated to chrome://hang/
  //         no CRI message for hang
  //    quit - chrome://quit
  //    kill - chrome://kill
  //    restart - chrome://restart

  // Launch Chrome Arguments
  //    https://peter.sh/experiments/chromium-command-line-switches/

  // Chromium crash reports:
  //    https://www.chromium.org/for-testers/bug-reporting-guidelines/reporting-crash-bug/
  // Decoding crash dumps:
  //    https://www.chromium.org/developers/decoding-crash-dumps/


  // chrome-remote-instance npm module: https://github.com/cyrus-and/chrome-remote-interface
  // DevTools Protocol
  // https://chromedevtools.github.io/devtools-protocol/tot/Inspector/

  //   Aww Snap: Err code SIGTRAP
  //   https://askubuntu.com/questions/1322126/every-once-a-while-my-chromium-snap-will-fail-to-load-any-page-a-reboot-always
  //   chrome bug: SNAP updates in background causing crash: https://bugs.launchpad.net/ubuntu/+source/chromium-browser/+bug/1914918

  it('hang or crash chrome', { browser: ['chrome', 'chrome:beta']}, () => {
    cy.log('do crash manually - go to launched browser and change url to chrome://crash')
    cy.wait(30000)
  })

  it.skip('hang chrome', { browser: ['chrome', 'chrome:beta']}, () => {
    cy.log('do hang manually - go to launched browser and change url to chrome://hang')
    cy.wait(30000)
  })
})