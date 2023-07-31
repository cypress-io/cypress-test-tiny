const puppeteer = require('puppeteer-core')

const delay = (time) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), time)
  })
}

// currently, this needs to be console logged and pasted here from the
// versionInfo in the packages/server/lib/browsers/browser-cri-client.ts
// `create` method after cypress launches the browser. it should look like:
// 'ws://127.0.0.1:53141/devtools/browser/f723911f-7988-44ec-8e5f-91ad3fd12eb1'
// once 'after:browser:launch' is implemented, it can be received
// dynamically from its handler instead
let debuggerUrl = '<debugger url here>'

function setupMultitab (on) {
  // can use this instead of hardcoding the debugger url once it's
  // implemented in the binary
  // on('after:browser:launch', (details) => {
  //   debuggerUrl = details.debuggerUrl
  // })

  on('task', {
    async multitab ({ tabPath, callback }) {
      const browser = await puppeteer.connect({ browserWSEndpoint: debuggerUrl })

      // the tab won't necessarily be opened and ready by the time this
      // runs, so retry up to 10 times
      const getPage = async (tries = 10) => {
        const pages = await browser.pages()

        if (tries === 0) {
          throw new Error('Could not get new tab after 10 tries')
        }

        const page = pages.find((page) => {
          return page.url().includes(tabPath)
        })

        if (!page) {
          await delay(200)

          return getPage(tries - 1)
        }

        return page
      }

      const page = await getPage()
      const result = await eval(callback)(page)

      page.close()

      return result
    }
  })
}

module.exports = setupMultitab
