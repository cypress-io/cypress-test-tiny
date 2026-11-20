const http = require('node:http')

// Serves a page that loads one large script containing frame-busting code.
// On Chrome's native network path, Cypress rewrites that script
// (modifyObstructiveCode) and sends the result back to Chrome base64-encoded
// in a Fetch.fulfillRequest CDP message. At the default 150 MiB the message is
// ~200 MiB, over Chrome's 100 MiB DevTools frame limit.
//
//   BIG_MB=150   size of the script in MiB
const BIG_MB = Number(process.env.BIG_MB || 150)
const PORT = Number(process.env.REPRO_PORT || 8094)

// The bulk is a string literal, so the file stays valid JS at any size.
const bigJs = Buffer.concat([
  Buffer.from(
    'if (window.top !== window.self) { window.top.location.href = window.self.location.href; }\n' +
      'if (top != self) { top.location = self.location; }\n' +
      'var _pad = "'
  ),
  Buffer.alloc(BIG_MB * 1024 * 1024, 'x'),
  Buffer.from(
    '";\nwindow.__bigLoaded = true;\n' +
      "var s = document.getElementById('status'); if (s) s.textContent = 'loaded';\n"
  ),
])

const html =
  '<!doctype html><html><head><meta charset="utf-8"><title>repro</title></head>' +
  '<body><div id="status">loading</div><script src="/big.js"></script></body></html>'

function startServer () {
  console.log(`Starting server on port ${PORT} with ${BIG_MB} MB JS bundle`)
  const server = http.createServer((req, res) => {
    if (req.url === '/big.js') {
      res.setHeader('content-type', 'application/javascript; charset=utf-8')
      res.setHeader('content-length', bigJs.length)
      res.end(bigJs)
    } else {
      res.setHeader('content-type', 'text/html; charset=utf-8')
      res.end(html)
    }
  })

  server.listen(PORT)

  return server
}

module.exports = { startServer, PORT }
