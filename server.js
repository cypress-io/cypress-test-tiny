const http = require('http')

const PORT = Number(process.env.REPRO_PORT) || 7879

// /two-cookies sets `kept` first and `dropped` second, each in its own
// set-cookie header
function startServer () {
  const server = http.createServer((req, res) => {
    if (req.url.startsWith('/two-cookies')) {
      res.setHeader('set-cookie', ['kept=origin; Path=/', 'dropped=origin; Path=/'])
      res.setHeader('content-type', 'text/html')
      res.end('<html><body>two cookies</body></html>')

      return
    }

    res.setHeader('content-type', 'text/html')
    res.end('<html><body>ok</body></html>')
  })

  return new Promise((resolve, reject) => {
    server.once('error', (err) => {
      // a second `cypress run` reuses the server the first one started
      if (err.code === 'EADDRINUSE') {
        resolve()

        return
      }

      reject(err)
    })

    server.listen(PORT, resolve)
  })
}

module.exports = { startServer, PORT }
