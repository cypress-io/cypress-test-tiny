const express = require('express')
const fs = require('fs/promises')
const path = require('path')

const app = express()
const port = 3030

const fileContents = function (ctx) {
  return fs.readFile(path.join(process.cwd(), 'cypress/fixtures', `${ctx}.html`))
}

;['first', 'second', 'third'].forEach(ctx => {
  app.get(`/${ctx}`, async (req, res) => {
    console.log(`GET /${ctx}`)
    const content = (await fileContents(ctx)).toString()
    res.send(content)
  })
})

app.get(`/code`, async (req, res) => {
  console.log(`GET /code`)
  res.send('abcdefg')
})

app.listen(port, () => { console.log('Listening on ', port)})