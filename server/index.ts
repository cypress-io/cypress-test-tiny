import crypto from 'node:crypto'
import http from 'node:http'
import https from 'node:https'
import cookieParser from 'cookie-parser'
import express from 'express'
import {
  attachCookiesForHome,
  attachCookiesForLogin,
  attachCookiesForLoginPage,
} from './cookie-hooks'
import { config, hostFor, type Subdomain, urlFor } from './config'
import { generateTlsCredentials } from './certs'

const csrfTokens = new Map<string, string>()

function subdomainFromHost(hostname: string): Subdomain | null {
  if (hostname === config.hosts.admin) return 'admin'
  if (hostname === config.hosts.dashboard) return 'dashboard'
  return null
}

function createApp(subdomain: Subdomain) {
  const app = express()
  app.use(cookieParser())
  app.use(express.urlencoded({ extended: false }))

  app.get('/login', (req, res) => {
    const csrfToken = crypto.randomBytes(16).toString('hex')
    csrfTokens.set(subdomain, csrfToken)

    attachCookiesForLoginPage(req, res, subdomain, { csrfToken })

    res.type('html').send(`<!doctype html>
<html>
  <body>
    <h1>${hostFor(subdomain)} login</h1>
    <form method="post" action="/login">
      <input type="hidden" name="csrf" value="${csrfToken}" />
      <label>Username <input data-cy="username" name="username" /></label>
      <label>Password <input data-cy="password" name="password" type="password" /></label>
      <button data-cy="login" type="submit">Log in</button>
    </form>
  </body>
</html>`)
  })

  app.post('/login', (req, res) => {
    const expectedCsrf = csrfTokens.get(subdomain)
    const { csrf, username, password } = req.body as Record<string, string | undefined>

    if (!expectedCsrf || csrf !== expectedCsrf || !username || !password) {
      return res.status(403).type('text/plain').send('CSRF error')
    }

    attachCookiesForLogin(req, res, subdomain, { username })

    res.redirect('/')
  })

  app.get('/', (req, res) => {
    const session = req.cookies?.[config.cookieNames.session]
    if (!session) {
      return res.redirect('/login')
    }

    const username = session.split(':').slice(1).join(':') || 'unknown'
    attachCookiesForHome(req, res, subdomain, { username })

    res.type('html').send(`<!doctype html>
<html>
  <body>
    <h1>${hostFor(subdomain)} home</h1>
    <p data-cy="session">Logged in as ${username}</p>
    <p data-cy="cookie-value">Session cookie: ${session}</p>
  </body>
</html>`)
  })

  return app
}

const adminApp = createApp('admin')
const dashboardApp = createApp('dashboard')

const root = express()
root.use((req, res, next) => {
  const subdomain = subdomainFromHost(req.hostname)
  if (!subdomain) {
    return res.status(404).type('text/plain').send(`Unknown host: ${req.hostname}`)
  }

  const app = subdomain === 'admin' ? adminApp : dashboardApp
  return app(req, res, next)
})

const { key, cert } = generateTlsCredentials()
const server = https.createServer({ key, cert }, root)

server.listen(config.port, () => {
  console.log(`Admin:     ${urlFor('admin')}`)
  console.log(`Dashboard: ${urlFor('dashboard')}`)
})

http
  .createServer((_req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('ok')
  })
  .listen(config.healthPort, () => {
    console.log(`Health:    http://127.0.0.1:${config.healthPort}`)
  })
