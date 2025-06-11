
describe('page', () => {



  ;[
    ['en', 'Welcome'],
    ['fr', 'Bienvenu'],
    ['de', 'Willkommen']
  ].forEach(([lang, salutation],i,langs) => {
    const [toLang, toSalutation] = langs[i+1] ? langs[i+1] : langs[0]

    describe('visiting www first', () => {
    
      beforeEach(() => {
        cy.visit('http://www.origin.com:3000')
      })

      it(`switches translation from entry page to ${lang}, then to ${toLang}`, () => {      
        cy.data('i18n-options').select(lang)
        cy.data('translate-button').click()


        // cy.origin is hidden behind the i18nHeaderText command
        cy.i18nHeaderText(lang).should('equal', salutation)
        // ...and also the i18nSwitch command.
        cy.i18nSwitch(lang, toLang)

        cy.i18nHeaderText(toLang).should('equal', toSalutation)
        
      })
      it(`allows users to sign up from the ${lang} i18n`, () => {
        const email = 'some@one.test' 
        cy.visit(`http://${lang}.origin.com:3000`)
        // cy.origin is necessary here because we have already visited www.origin.com in the beforeEach

        cy.origin(
          `http://${lang}.origin.com:3000`,
          // Because of how the cy.origin callback is serialized, it will not
          // be able to reference any variables via closure from this file.
          // Pass them in to cy.origin like so, and they will be available in
          // the callback.
          // NOTE: these values *must* be serializable. `window`, for example,
          // will error.
          { args: { email, lang, salutation } },
          ({ email, lang, salutation }) => {
            // Cypress.require demands its argument be a static inlined value. 
            // It cannot be a variable reference.
            // This bootstraps our custom commands, ensuring that cy.data is
            // available. If you partition your custom commands into different
            // files, loading only those files that are necessary for the cy.origin
            // block can speed up your tests.
            Cypress.require('../support/commands')
            cy.data('signup-link').click()
            cy.url().should('include', '/signup')
            cy.data('email-input').type(email)
            cy.data('signup-btn').click()
            cy.url().should('eq', `http://${lang}.origin.com:3000/`)
            cy.get('h1').should('contain.text', salutation).should('contain.text', email)
        })
      })
    })

    describe('not visiting www first', () => {
      it(`users can sign up in ${lang} i18n`, () => {
        const email = 'some@one.test' 
        cy.visit(`http://${lang}.origin.com:3000`)
        
        cy.data('signup-link').click()
        cy.url().should('include', '/signup')
        cy.data('email-input').type(email)
        cy.data('signup-btn').click()
        cy.url().should('eq', `http://${lang}.origin.com:3000/`)
        cy.get('h1').should('contain.text', salutation).should('contain.text', email)
      })
    })
  })
})
