import { Username } from './globals'

Cypress.Commands.add('printName', () => {
  console.log('command globals name: %s', Username.name)
})
