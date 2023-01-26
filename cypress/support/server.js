const bodyParser = require('body-parser')
const express = require('express')
const http = require('http')
const path = require('path')
const Promise = require('bluebird')
console.log("import")
const createApp = (port) => {
  const app = express()

  app.set('port', port)
  app.set('view engine', 'html')

  app.use(require('cors')())
  app.use(require('cookie-parser')())
  app.use(require('compression')())
  app.use(bodyParser.urlencoded({ extended: false }))
  app.use(bodyParser.json())
  app.use(bodyParser.raw())
  app.use(require('method-override')())

  app.head('/', (_req, res) => {
    return res.sendStatus(200)
  })

  app.get('/', (_req, res) => {
    return res.setHeader('Content-Type', 'text/html; charset=utf-8')
    .send('<html><body>Home Page</body></html>')
  })

  app.get('/logout', (_req, res) => {
    return res.send('<html><body>Logged Out</body></html>')
  })

  app.post('/login', (_req, res) => {
    return Promise
    .delay(1000)
    .then(() => {
      return res.append('Set-Cookie', 'QA_SessionID=sessionID')
      .append('Set-Cookie', 'QA_KEEP_ALIVE=true')
      .send('<html><body>Logged In</body></html>')
    })
  })

  app.get('/infra/csrf', (_req, res) => {
    return Promise
    .delay(200)
    .then(() => {
      return res.header('Set-Cookie', 'csrftoken=test_token')
      .send(`
        <html>
        <body>
            <h1>Redirecting...</h1>
            <script>
            setTimeout(() => {
                window.location.href = 'csrftoken=test_token'
            }, 500)
            </script>
        </body>
        </html>
      `)
    })
  })

  const getUserCookie = (req) => {
    return req.cookies.csrftoken
  }

  app.get('/welcome', (req, res) => {
    const user = getUserCookie(req)
    console.log('user', req)

    if (!user) {
      return res.send('<html><body><h1>Failed to log in</h1></body></html>')
    }

    res.send(`<html><body><h1>Welcome!</h1></body></html>`)
  })

  app.use(express.static(path.join(__dirname, '..')))

  app.use(require('errorhandler')())

  return app
}

const app = createApp(3500)
const server = http.Server(app)

server.listen(app.get('port'), () => {
    return console.log('Express server listening on port', app.get('port'))
})