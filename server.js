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

    if (req.url.startsWith('/set-cookie')) {
      // /set-cookie?samesite=lax|none
      const samesite = /samesite=none/i.test(req.url)
        ? 'Secure; SameSite=None'
        : 'SameSite=Lax'

      res.setHeader('set-cookie', `foo=original; Path=/; ${samesite}`)
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
