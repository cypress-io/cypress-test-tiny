
describe('page', () => {

  describe('visiting www first (origin necessary for signup)', () => {
      
    beforeEach(() => {
      cy.visit('http://www.origin.com:3000')
    })

    ;[
      ['en', 'Welcome'],
      ['fr', 'Bienvenu'],
      ['de', 'Willkommen']
    ].forEach(([lang, salutation],i,langs) => {
      const [toLang, toSalutation] = langs[i+1] ? langs[i+1] : langs[0]
      it(`switches translation from entry page to ${lang}, then to ${toLang}`, () => {      
        cy.data('i18n-options').select(lang)
        cy.data('translate-button').click()


        cy.i18nHeaderText(lang).should('equal', salutation)

        cy.i18nSwitch(lang, toLang)

        cy.i18nHeaderText(toLang).should('equal', toSalutation)
        
      })
      it(`allows users to sign up from the ${lang} i18n`, () => {
        const email = 'some@one.test' 
        cy.visit(`http://${lang}.origin.com:3000`)
        cy.origin(`http://${lang}.origin.com:3000`, { args: { email, lang, salutation } }, ({ email, lang, salutation }) => {
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
  })

  describe('not visiting www. first (cy origin unnecessary for signup test)', () => {
    ;[
      ['en', 'Welcome'],
      ['fr', 'Bienvenu'],
      ['de', 'Willkommen']
    ].forEach(([lang, salutation]) => {
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
