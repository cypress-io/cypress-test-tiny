it('stores local storage for both https visits', () => {
  cy.then(async() => {
    const data = await Cypress.session.getCurrentSessionData()
    cy.log('session data at start of test')
    cy.then(() => {
      expect(data.localStorage.length, 'number of localStorage entries').to.eq(0)
      expect(data.sessionStorage.length,  'number of sessionStorage entries').to.eq(0)
      expect(data.cookies.length, 'number of cookies').to.eq(0)
    })
  })
  cy.session('session',  () => {
    cy.visit('www.github.com');
    cy.contains('github')

    cy.origin('target.com', () => {
      cy.visit('www.target.com')
      cy.contains('Target')
      cy.window().then((win) => {
        win.localStorage.setItem('food', 'icecream')
      })
      cy.window().then((win) => {
        expect(win.localStorage.getItem('food')).to.eq('icecream')
      })
    });

    // back to original origin
    cy.visit('www.github.com')
    cy.contains('github')
  })

  cy.then(async() => {
    const data = await Cypress.session.getCurrentSessionData()
    Cypress.log({
      name: 'check current session data',
      message: 'click to view data',
      consoleProps: () => data,
    })
    cy.then(() => {
      expect(data.localStorage.length, 'number of localStorage entries').to.eq(2)
      expect(data.localStorage.some(({ origin }) =>  origin === 'https://github.com')).to.be.true
      expect(data.localStorage.some(({ origin }) =>  origin === 'https://www.target.com')).to.be.true
      expect(data.sessionStorage.length,  'number of sessionStorage entries').to.eq(2)
      expect(data.sessionStorage.some(({ origin }) =>  origin === 'https://github.com')).to.be.true
      expect(data.sessionStorage.some(({ origin }) =>  origin === 'https://www.google.com')).to.be.true
      expect(data.cookies.length, 'number of cookies').to.greaterThan(0)
    })
  })
})

it('stores local storage for only https visit when current origin is https', () => {
  cy.then(async() => {
    const data = await Cypress.session.getCurrentSessionData()
    cy.log('session data at start of test')
    cy.then(() => {
      expect(data.localStorage.length, 'number of localStorage entries').to.eq(0)
      expect(data.sessionStorage.length,  'number of sessionStorage entries').to.eq(0)
      expect(data.cookies.length, 'number of cookies').to.eq(0)
    })
  })
  cy.session('session2',  () => {
    cy.visit('www.github.com');
    cy.contains('github')

    cy.origin('http://localhost:3500/', () => {
      cy.visit('http://localhost:3500/')
      cy.contains('root')
      cy.window().then((win) => {
        win.localStorage.setItem('food', 'icecream')
      })
      cy.window().then((win) => {
        expect(win.localStorage.getItem('food')).to.eq('icecream')
      })
    });

    // back to original origin
    cy.visit('www.github.com')
    cy.contains('github')
  })
  cy.then(async() => {
    const data = await Cypress.session.getCurrentSessionData()
    Cypress.log({
      name: 'check current session data',
      message: 'click to view data',
      consoleProps: () => data,
    })
    cy.then(() => {
      expect(data.localStorage.length, 'number of localStorage entries').to.eq(1)
      expect(data.localStorage[0].origin).to.eq('https://github.com')
      expect(data.sessionStorage.length,  'number of sessionStorage entries').to.eq(1)
      expect(data.sessionStorage[0].origin).to.eq('https://github.com')
      expect(data.cookies.length, 'number of cookies').to.greaterThan(0)
    })
  })
})

it('stores local storage for both http and https visit when current origin is http', () => {
  cy.then(async() => {
    const data = await Cypress.session.getCurrentSessionData()
    cy.log('session data at start of test')
    cy.then(() => {
      expect(data.localStorage.length, 'number of localStorage entries').to.eq(0)
      expect(data.sessionStorage.length,  'number of sessionStorage entries').to.eq(0)
      expect(data.cookies.length, 'number of cookies').to.eq(0)
    })
  })
  cy.session('session3',  () => {
    cy.visit('http://localhost:3500/')
    cy.contains('root')
    cy.window().then((win) => {
      win.localStorage.setItem('food', 'icecream')
    })
    cy.window().then((win) => {
      expect(win.localStorage.getItem('food')).to.eq('icecream')
    })

    cy.origin('github.com', () => {
      cy.visit('www.github.com');
      cy.contains('github')
      cy.wait(3000)
    });

    // back to original origin
    cy.visit('http://localhost:3500/')
    cy.contains('root')
  })
  cy.then(async() => {
    const data = await Cypress.session.getCurrentSessionData()
    Cypress.log({
      name: 'check current session data',
      message: 'click to view data',
      consoleProps: () => data,
    })
    cy.then(() => {
      expect(data.localStorage.length, 'number of localStorage entries').to.eq(2)
      expect(data.localStorage[0].origin).to.eq('http://localhost:3500')
      expect(data.localStorage[1].origin).to.eq('https://github.com')
      expect(data.sessionStorage.length,  'number of sessionStorage entries').to.eq(1)
      expect(data.sessionStorage[0].origin).to.eq('https://github.com')
      expect(data.cookies.length, 'number of cookies').to.greaterThan(0)
    })
  })
})

it('stores local storage for both http visits', () => {
  cy.then(async() => {
    const data = await Cypress.session.getCurrentSessionData()
    cy.log('session data at start of test')
    cy.then(() => {
      expect(data.localStorage.length, 'number of localStorage entries').to.eq(0)
      expect(data.sessionStorage.length,  'number of sessionStorage entries').to.eq(0)
      expect(data.cookies.length, 'number of cookies').to.eq(0)
    })
  })
  cy.session('session4',  () => {
    cy.visit('cypress/fixtures/index.html');
    cy.get('#local_storage').should('exist')
    cy.window().then((win) => {
      win.localStorage.setItem('hi', 'bob')
    })

    cy.origin('http://localhost:3500/', () => {
      cy.visit('http://localhost:3500/')
      cy.contains('root')
      cy.window().then((win) => {
        win.localStorage.setItem('food', 'icecream')
      })
      cy.window().then((win) => {
        expect(win.localStorage.getItem('food')).to.eq('icecream')
      })
    });

    // back to original origin
    cy.visit('cypress/fixtures/index.html');
  })

  cy.then(async() => {
    const data = await Cypress.session.getCurrentSessionData()
    Cypress.log({
      name: 'check current session data',
      message: 'click to view data',
      consoleProps: () => data,
    })
    cy.then(() => {
      expect(data.localStorage.length, 'number of localStorage entries').to.eq(2)
      expect(data.localStorage.some(({ origin }) =>  origin === `http://localhost:${Cypress.config('port')}`)).to.be.true
      expect(data.localStorage.some(({ origin }) =>  origin === 'http://localhost:3500')).to.be.true
      expect(data.sessionStorage.length,  'number of sessionStorage entries').to.eq(0)
      expect(data.cookies.length, 'number of cookies').to.eq(0)
    })
  })
})
