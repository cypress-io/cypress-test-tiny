const http = require('node:http')

// Serves a single-page app shaped like the one in #35209: on load it registers
// a service worker, replaces window.fetch with an in-page mock for /api/*,
// compiles a large WebAssembly module and fetches ~50 static assets. #status
// reads "ready" once all of that has finished.
//
//   WASM_MB=60     size of the .wasm module in MiB (0 to skip it)
//   CHUNKS=20      number of JS chunks
//   CHUNK_KB=100   size of each JS chunk in KiB
//   IMAGES=20      number of images
//   JSON=10        number of JSON files fetched over the network
//   SW=1           register a pass-through service worker (0 to skip)
//   REPRO_PORT=8095
const WASM_MB = Number(process.env.WASM_MB ?? 60)
const CHUNKS = Number(process.env.CHUNKS ?? 20)
const CHUNK_KB = Number(process.env.CHUNK_KB ?? 100)
const IMAGES = Number(process.env.IMAGES ?? 20)
const JSON_FILES = Number(process.env.JSON ?? 10)
const SW = process.env.SW !== '0'
const PORT = Number(process.env.REPRO_PORT || 8095)

const leb128 = (n) => {
  const bytes = []

  do {
    let byte = n & 0x7f

    n >>>= 7
    if (n !== 0) byte |= 0x80
    bytes.push(byte)
  } while (n !== 0)

  return Buffer.from(bytes)
}

// A valid module whose bulk is one custom section, so it compiles at any size.
const buildWasm = (mb) => {
  const name = Buffer.from('pad')
  const payload = Buffer.alloc(mb * 1024 * 1024, 0x61)
  const sectionBody = Buffer.concat([leb128(name.length), name, payload])

  return Buffer.concat([
    Buffer.from([0x00, 0x61, 0x73, 0x6d, 0x01, 0x00, 0x00, 0x00]),
    Buffer.from([0x00]),
    leb128(sectionBody.length),
    sectionBody,
  ])
}

const wasm = WASM_MB > 0 ? buildWasm(WASM_MB) : null

const chunk = (i) => {
  return `window.__chunks = (window.__chunks || 0) + 1;\nvar _chunk${i} = "${'x'.repeat(CHUNK_KB * 1024)}";\n`
}

// 1x1 transparent PNG
const png = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=', 'base64')

const swJs = `
self.addEventListener('install', () => self.skipWaiting())
self.addEventListener('activate', (e) => e.waitUntil(self.clients.claim()))
self.addEventListener('fetch', (e) => e.respondWith(fetch(e.request)))
`

const appJs = `
const realFetch = window.fetch.bind(window)

// API calls are answered inside the page and never reach the network.
window.fetch = (input, init) => {
  const url = typeof input === 'string' ? input : input.url

  if (url.includes('/api/')) {
    return Promise.resolve(new Response(JSON.stringify({ id: 'usr_8f2c1a', name: 'Jordan Rivera' }), {
      headers: { 'content-type': 'application/json' },
    }))
  }

  return realFetch(input, init)
}

const loadScript = (src) => new Promise((resolve, reject) => {
  const s = document.createElement('script')
  s.src = src
  s.onload = resolve
  s.onerror = reject
  document.head.appendChild(s)
})

const loadImage = (src) => new Promise((resolve, reject) => {
  const img = new Image()
  img.onload = resolve
  img.onerror = reject
  img.src = src
  document.body.appendChild(img)
})

const status = document.getElementById('status')

async function boot () {
  const t0 = performance.now()
  const work = []

  if (${SW} && 'serviceWorker' in navigator) {
    work.push(navigator.serviceWorker.register('/sw.js').then(() => navigator.serviceWorker.ready))
  }

  if (${!!wasm}) {
    work.push(WebAssembly.compileStreaming(realFetch('/app.wasm')))
  }

  for (let i = 0; i < ${CHUNKS}; i++) work.push(loadScript('/chunk-' + i + '.js'))
  for (let i = 0; i < ${IMAGES}; i++) work.push(loadImage('/img-' + i + '.png'))
  for (let i = 0; i < ${JSON_FILES}; i++) work.push(realFetch('/data-' + i + '.json').then((r) => r.json()))
  for (let i = 0; i < 20; i++) work.push(window.fetch('/api/item/' + i).then((r) => r.json()))

  await Promise.all(work)
  window.__bootMs = performance.now() - t0
  status.textContent = 'ready'
}

boot().catch((err) => { status.textContent = 'error: ' + err.message })
`

const html = `<!doctype html><html><head><meta charset="utf-8"><title>issue-35209</title>
<link rel="stylesheet" href="/app.css"></head>
<body><div id="status">loading</div><script src="/app.js"></script></body></html>`

const send = (res, type, body, cacheable) => {
  res.setHeader('content-type', type)
  res.setHeader('content-length', Buffer.byteLength(body))
  res.setHeader('cache-control', cacheable ? 'public, max-age=3600' : 'no-cache')
  res.end(body)
}

function startServer () {
  console.log(`Starting server on port ${PORT}: wasm ${WASM_MB} MiB, ${CHUNKS} x ${CHUNK_KB} KiB chunks, ${IMAGES} images, ${JSON_FILES} json, sw ${SW}`)

  const server = http.createServer((req, res) => {
    const url = req.url.split('?')[0]
    let m

    if (url === '/' || url === '/index.html') return send(res, 'text/html; charset=utf-8', html, false)

    if (url === '/app.js') return send(res, 'application/javascript', appJs, false)

    if (url === '/sw.js') return send(res, 'application/javascript', swJs, false)

    if (url === '/app.css') return send(res, 'text/css', 'body { font-family: sans-serif }', true)

    if (url === '/app.wasm' && wasm) return send(res, 'application/wasm', wasm, true)

    if ((m = url.match(/^\/chunk-(\d+)\.js$/))) return send(res, 'application/javascript', chunk(m[1]), true)

    if (url.match(/^\/img-\d+\.png$/)) return send(res, 'image/png', png, true)

    if ((m = url.match(/^\/data-(\d+)\.json$/))) return send(res, 'application/json', JSON.stringify({ page: Number(m[1]), items: [] }), false)

    res.statusCode = 404
    res.end()
  })

  server.listen(PORT)

  return server
}

module.exports = { startServer, PORT }
