Cypress.Commands.overwrite("visit", (originalVisit, url, options) => {
  console.log('calling cy.visit')
  const opts = {
    onBeforeLoad: (win) => {
      console.log('onBeforeLoad')
    },
    onLoad: (win) => {
      console.log('onLoad')
    }
  }
  return originalVisit(url, opts)
})
