// Mirrors the request flow from cypress-io/cypress#35055: a Turbo-style fetch
// POST answered with a same-origin 302, followed to a 200 page, then three
// turbo_stream GETs.
//
// The POST waits `?delay=<ms>` before answering, so a spec can compare
// responses on either side of the 30s CDP Fetch response-pause timeout.
// Plain HTTP/1.1 is enough: the failure reproduces the same over HTTP/2 + TLS.
const http = require('http')

const PORT = Number(process.env.PORT || 3000)

const page = `<!doctype html>
<form id="f"><input type="submit" value="Create"></form>
<script>
  document.getElementById('f').addEventListener('submit', async (e) => {
    e.preventDefault();
    const delay = new URLSearchParams(location.search).get('delay') || '0';
    const r = await fetch('/parents/1/children?delay=' + delay, {
      method: 'POST',
      redirect: 'follow',
      headers: { Accept: 'text/vnd.turbo-stream.html, text/html' },
      body: new URLSearchParams({ name: 'x' }),
    });
    document.body.innerHTML = await r.text();
    history.pushState({}, '', r.url);
    ['a', 'b', 'c'].forEach((s) => fetch('/parents/1/' + s + '.turbo_stream'));
  });
</script>`

function start () {
  const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://localhost:${PORT}`)

    if (req.method === 'GET' && url.pathname === '/') {
      res.writeHead(200, { 'Content-Type': 'text/html' })

      return res.end(page)
    }

    if (req.method === 'POST' && url.pathname === '/parents/1/children') {
      const delay = Number(url.searchParams.get('delay') || 0)
      const started = Date.now()

      req.resume()

      return setTimeout(() => {
        // eslint-disable-next-line no-console
        console.log(`[server] POST /parents/1/children answered 302 after ${Date.now() - started}ms`)
        res.writeHead(302, { Location: '/parents/1', 'Set-Cookie': 's=1; Path=/; HttpOnly' })
        res.end()
      }, delay)
    }

    if (url.pathname === '/parents/1') {
      res.writeHead(200, { 'Content-Type': 'text/html' })

      return res.end('<h1 id="done">Parent</h1>')
    }

    if (url.pathname.endsWith('.turbo_stream')) {
      res.writeHead(200, { 'Content-Type': 'text/vnd.turbo-stream.html' })

      return res.end('<turbo-stream></turbo-stream>')
    }

    res.writeHead(404)
    res.end()
  })

  server.listen(PORT)

  return () => server.close()
}

module.exports = { start, PORT }

if (require.main === module) start()
