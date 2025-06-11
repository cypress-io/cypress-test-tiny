import express from 'express'
import { engine } from 'express-handlebars'
import bodyParser from 'body-parser'

const app = express()
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './server/views')

app.use(bodyParser.urlencoded({ extended: true }))

const i18nLookup = new Map()
i18nLookup.set('en', {
  salutation: 'Welcome',
  signUp: {
    legend: `Sign Up`,
    email: 'e-mail',
    pwd: 'password'
  }
})
i18nLookup.set('fr', {
  salutation: 'Bienvenu',
  signUp: {
    legend: `S'inscrire`,
    email: 'e-mail',
    pwd: 'mot de passe'
  }
})
i18nLookup.set('de', {
  salutation: 'Willkommen',
  signUp: {
    legend: 'Melden Sie sich an',
    email: 'E-Mail',
    pwd: 'Passwort'
  }
})

app.get('/', (req, res) => {
  if(req.headers.host.startsWith('www')) {
    res.render('home')
    return
  }

  const [,i18nCode] = /([a-zA-Z]+)\./g.exec(req.headers.host) 

  if (!i18nLookup.has(i18nCode)) {
    res.status(404)
  }

  res.render('salutation', {
    i: i18nLookup.get(i18nCode)
  })
})

app.post('/', (req, res) => {
  if(req.headers.host.startsWith('www')) {
    res.status(404)
  }
  const [,i18nCode] = /([a-zA-Z]+)\./g.exec(req.headers.host) 

  if (!i18nLookup.has(i18nCode)) {
    res.status(404)
  }

  res.render('salutation', {
    i: i18nLookup.get(i18nCode),
    email: req.body.email
  })
})

app.get('/signup', (req, res) => {
  const [,i18nCode] = /([a-zA-Z]+)\./g.exec(req.headers.host) 

  if (!i18nLookup.has(i18nCode)) {
    res.status(404)
  }

  
  res.render('signup', {
    i: i18nLookup.get(i18nCode)
  })
})

app.listen(3000)