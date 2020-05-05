import { Username } from './globals'

window.Username = Username

Cypress.Commands.add('printName', () => {
  console.log('command globals name: %s', Username.name)
})
