const http = require('http')

const PORT = 7878

// Single server, addressed two ways so the browser sees two origins:
//   http://localhost:7878  -> the AUT
//   http://127.0.0.1:7878  -> cross-site endpoint that sets the cookie
function startServer () {
  const server = http.createServer((req, res) => {
    const origin = req.headers.origin

    if (origin) {
      res.setHeader('access-control-allow-origin', origin)
      res.setHeader('access-control-allow-credentials', 'true')
    }

    // 302 that carries its own set-cookie, closer to the shape in the issue
    if (req.url.startsWith('/redirect')) {
      res.statusCode = 302
      res.setHeader('set-cookie', 'foo=original; Path=/; Secure; SameSite=None')
      res.setHeader('location', '/after-redirect')
      res.end()

      return
    }

    if (req.url.startsWith('/after-redirect')) {
      // echo the query so a rewritten `location` is observable from the page
      const query = req.url.split('?')[1]

      res.setHeader('content-type', 'text/plain')
      res.end(query ? `landed:${query}` : 'landed')

      return
    }

    if (req.url.startsWith('/set-cookie')) {
      // /set-cookie?samesite=lax|none
      const samesite = /samesite=none/i.test(req.url)
        ? 'Secure; SameSite=None'
        : 'SameSite=Lax'

      res.setHeader('set-cookie', `foo=original; Path=/; ${samesite}`)
      // an ordinary header, rewritten alongside set-cookie and readable from JS
      res.setHeader('x-probe', 'original')
      res.setHeader('access-control-expose-headers', 'x-probe')
      res.setHeader('content-type', 'text/plain')
      res.end('ok')

      return
    }

    res.setHeader('content-type', 'text/html')
    res.end('<html><body><h1>cypress-test-tiny</h1></body></html>')
  })

  return new Promise((resolve, reject) => {
    server.on('error', (err) => {
      // config can be evaluated more than once; reuse an already-running server
      if (err.code === 'EADDRINUSE') return resolve(PORT)

      reject(err)
    })

    server.listen(PORT, () => resolve(PORT))
  })
}

module.exports = { startServer, PORT }
