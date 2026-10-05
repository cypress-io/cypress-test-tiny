// Page on :3100, never-ending SSE on :3101 (a different origin, like the reporter's API).
// SSE_CLOSE_AFTER_MS (optional) makes the server end each stream after that long.
const http = require('http')

const PAGE_PORT = 3100
const SSE_PORT = 3101

const page = `<!doctype html>
<html><body><h1>sse repro</h1>
<script>
  window.got = { eventSource: false, xhr: false }

  const es = new EventSource('http://localhost:${SSE_PORT}/sse-es')
  es.onmessage = () => { window.got.eventSource = true }

  // long-lived XHR read of the stream, as XHR-based SSE polyfills do
  const xhr = new XMLHttpRequest()
  xhr.open('GET', 'http://localhost:${SSE_PORT}/sse-xhr')
  xhr.setRequestHeader('Accept', 'text/event-stream')
  xhr.onprogress = () => { if (xhr.responseText.includes('data:')) window.got.xhr = true }
  xhr.send()
</script></body></html>`

exports.start = () => {
  const closeAfter = Number(process.env.SSE_CLOSE_AFTER_MS) || 0

  const pageServer = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' })
    res.end(page)
  }).listen(PAGE_PORT)

  const sseServer = http.createServer((req, res) => {
    res.writeHead(200, {
      'content-type': 'text/event-stream',
      'cache-control': 'no-cache',
      'access-control-allow-origin': '*',
    })
    res.write(':ok\n\n')
    res.write('data: hello\n\n')

    const timer = setInterval(() => res.write(': heartbeat\n\n'), 10000)

    if (closeAfter) {
      setTimeout(() => res.end(), closeAfter)
    }

    req.on('close', () => clearInterval(timer))
  }).listen(SSE_PORT)

  return () => {
    pageServer.closeAllConnections()
    sseServer.closeAllConnections()
    pageServer.close()
    sseServer.close()
  }
}
