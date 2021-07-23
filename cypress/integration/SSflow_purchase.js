const email = "Jessie-"+Math.random()+"@calm.com"
const company = "Company"+Math.random()


// Normal SS purchase flow
describe('SS Purchase flow', () => {
    it('SS Purchase', () => {
  // Creates account 
      cy.clearCookies()
      cy.visit(`https://www.app.aws-dev.useast1.calm.com/teams`)
      cy.get('[data-testid="button"]').eq(0).should('be.disabled')
      cy.get('[data-testid="form-input"]').eq(0).type(email)
      cy.get('[data-testid="form-input"]').eq(1).type("Jessie")
      cy.get('[data-testid="form-input"]').eq(2).type("calmpassword")
      cy.get('[data-testid="form-input"]').eq(3).type(company)
      cy.get('select').select('Company Executive / Senior Leader')
      cy.get('[data-testid="button"]').eq(0).click()


// Attempts to create a password with the email domain 
      cy.get('[data-testid="form-input"]').eq(4).type("Calm12345!")
      cy.get('[data-testid="form-input"]').eq(5).type("Calm12345!")
      cy.get('[data-testid="button"]').eq(1).should('be.disabled')

// Attempts to create another password that does not fit requirements
      cy.get('[data-testid="form-input"]').eq(4).clear()
      cy.get('[data-testid="form-input"]').eq(5).clear()
      cy.get('[data-testid="form-input"]').eq(4).type("SHORT12")
      cy.get('[data-testid="form-input"]').eq(5).type("SHORT12")
      cy.get('[data-testid="button"]').eq(1).should('be.disabled')

// Creates a password that fits requirements
      cy.get('[data-testid="form-input"]').eq(4).clear()
      cy.get('[data-testid="form-input"]').eq(5).clear()
      cy.get('[data-testid="form-input"]').eq(4).type("Password12345!")
      cy.get('[data-testid="form-input"]').eq(5).type("Password12345!")
      cy.get('[data-testid="button"]').eq(1).click()

// Enters a CC number that will result in a decline error
      cy.get('[data-testid="form-input"]').eq(6).type("20")
      cy.get('[data-testid="ccName-input"]').type("Jessie")
      cy.getWithinIframe('[name="cardnumber"]').type('4000000000000002')
      cy.getWithinIframe('[name="exp-date"]').type('04/23')    
      cy.getWithinIframe('[name="cvc"]').type('987')
      cy.get('[type="checkbox"]').check({force: true})  
      cy.get('[data-testid="checkout-button"]').click()
      cy.contains("Error: card was declined. Please verify the card info and try again.")
       
// Enter a CC number that will successfully make a purchase
      cy.getWithinIframe('[name="cardnumber"]').clear({force: true})    
      cy.getWithinIframe('[name="cardnumber"]').type('4242424242424242')
      cy.getWithinIframe('[name="exp-date"]').type('04/23')    
      cy.getWithinIframe('[name="cvc"]').type('987')
      cy.get('[type="checkbox"]').check({force: true})  
      cy.get('[data-testid="checkout-button"]').click()
      cy.wait(11000)
      cy.location().should((loc) => {
        expect(loc.search).to.include(`partner=${company}`);
        expect(loc.search).to.include('partnerId=');
        expect(loc.pathname).to.eq('/teams/success')
    })

// Log out and then log back into partner portal with account info that was just created
      cy.visit(`https://www.app.aws-dev.useast1.calm.com/`)
      cy.wait(5000)
      cy.get('[data-testid="logout-button"]').click()
      cy.get('input[name="email"]').type(email)
      cy.get('input[name="password"]').type("Password12345!")
      cy.get('[data-testid="login-button"]').click()
      cy.wait(5000)
      cy.url().should('include','/account')
    })

 })

// Attemps to make a purchase of under 5 covered lives
describe('SS Purchase flow < 5', () => {
    it('SS Purchase < 5', () => {
// Creates a account
      cy.visit(`https://www.app.aws-dev.useast1.calm.com/teams`)
      cy.get('[data-testid="form-input"]').eq(0).type(email)
      cy.get('[data-testid="form-input"]').eq(1).type("Jessie")
      cy.get('[data-testid="form-input"]').eq(2).type("calmpassword")
      cy.get('[data-testid="form-input"]').eq(3).type(company)
      cy.get('select').select('Company Executive / Senior Leader')
      cy.get('[data-testid="button"]').eq(0).click()
// Creates a password
      cy.get('[data-testid="form-input"]').eq(4).type("Password12345!")
      cy.get('[data-testid="form-input"]').eq(5).type("Password12345!")
      cy.get('[data-testid="button"]').eq(1).click()
// Attempts to purchase under 5 covered lives 
      cy.get('[data-testid="form-input"]').eq(6).type("4")
      cy.get('[data-testid="ccName-input"]').click()
      cy.get('[data-testid="book-a-demo"]').click()
      cy.url().should('eq', 'https://www.calm.com/')

    })

 })

// Attemps to make a purchase of over 100 covered lives
describe('SS Purchase flow > 100', () => {
    it('SS Purchase < 5', () => {
      // Creates a account
      cy.visit(`https://www.app.aws-dev.useast1.calm.com/teams`)
      cy.get('[data-testid="form-input"]').eq(0).type(email)
      cy.get('[data-testid="form-input"]').eq(1).type("Jessie")
      cy.get('[data-testid="form-input"]').eq(2).type("calmpassword")
      cy.get('[data-testid="form-input"]').eq(3).type(company)
      cy.get('select').select('Company Executive / Senior Leader')
      cy.get('[data-testid="button"]').eq(0).click()
      // Creates a password
      cy.get('[data-testid="form-input"]').eq(4).type("Password12345!")
      cy.get('[data-testid="form-input"]').eq(5).type("Password12345!")
      cy.get('[data-testid="button"]').eq(1).click()
// Attempts to purchase over 100 covered lives 
      cy.get('[data-testid="form-input"]').eq(6).type("101")
      cy.get('[data-testid="book-a-demo"]').click()
      cy.url().should('eq', 'https://www.calm.com/business/book-a-demo')

    })

 })

// Attempts to create a SS admin account for a user that already have an account
describe('SS Purchase flow - Email exists', () => {
    it('SS Purchase flow - Email exists', () => {
// Creates a account
      cy.visit(`https://www.app.aws-dev.useast1.calm.com/teams`)
      cy.get('[data-testid="form-input"]').eq(0).type("Jessie@calm.com")
      cy.get('[data-testid="form-input"]').eq(1).type("Jessie")
      cy.get('[data-testid="form-input"]').eq(2).type("calmpassword")
      cy.get('[data-testid="form-input"]').eq(3).type(company)
      cy.get('select').select('Company Executive / Senior Leader')
      cy.get('[data-testid="button"]').eq(0).click()

// Creates a password
      cy.get('[data-testid="form-input"]').eq(4).type("Password12345!")
      cy.get('[data-testid="form-input"]').eq(5).type("Password12345!")
      cy.get('[data-testid="button"]').eq(1).click()

// Enters CC info
      cy.get('[data-testid="form-input"]').eq(6).type("20")
      cy.get('[data-testid="ccName-input"]').type("Jessie")
      cy.getWithinIframe('[name="cardnumber"]').type('4242424242424242')
      cy.getWithinIframe('[name="exp-date"]').type('04/23')    
      cy.getWithinIframe('[name="cvc"]').type('987')
      cy.get('[type="checkbox"]').check({force: true})  
      cy.get('[data-testid="checkout-button"]').click()
      cy.contains("Error: email is already in use. Please sign up with a different email.")

    })

 })



