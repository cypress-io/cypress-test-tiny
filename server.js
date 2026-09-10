const https = require('https')
const fs = require('fs')
const path = require('path')

const read = (f) => fs.readFileSync(path.join(__dirname, 'certs', f))

// An origin that demands a client certificate and refuses the connection without one.
module.exports = function startServer () {
  return https.createServer({
    key: read('server.key'),
    cert: read('server.crt'),
    ca: read('ca.crt'),
    requestCert: true,
    rejectUnauthorized: true,
  }, (req, res) => {
    const cn = req.socket.getPeerCertificate().subject.CN

    // /sub is fetched by the page itself, so the browser must open its own TLS
    // connection to this origin — the document alone may be served from Cypress's
    // Node-side resolve:url pre-flight and never exercise browser mTLS at all.
    if (req.url === '/sub') {
      res.writeHead(200, { 'content-type': 'text/plain' })

      return res.end(cn)
    }

    res.writeHead(200, { 'content-type': 'text/html' })
    res.end(`
      <h1 id="cn">${cn}</h1>
      <p id="sub">pending</p>
      <script>
        fetch('/sub')
        .then((r) => r.text())
        .then((t) => { document.getElementById('sub').textContent = t })
        .catch((e) => { document.getElementById('sub').textContent = 'FAILED: ' + e })
      </script>
    `)
  }).listen(8443)
}

if (require.main === module) {
  module.exports()
  // eslint-disable-next-line no-console
  console.log('listening on https://localhost:8443')
}
