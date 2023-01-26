// uncomment to see behaviors with cookies defaults used
// Cypress.Cookies.defaults({
//     preserve: ['csrftoken', 'qa_sessionid', 'qa_sessionid_keepalive']
// })

Cypress.Commands.add('api_login', (user_type, route = null) => {
    cy.log('Logging in via API request')
    if (Cypress.env('AUTHENTICATED') === 'True') {
        cy.request({
            method: 'GET',
            url: '/logout'
        })
    }

    cy.fixture('users').then((users) => {
        cy.request({
            method: 'GET',
            url: '/infra/csrf'
        }).then(() => {
            cy.getCookie('csrftoken')
            .then((csrftoken) => {
                Cypress.env('AUTHENTICATED', 'True')

                cy.request({
                    method: 'POST',
                    url: '/login',
                    form: true,
                    body: {
                        csrftoken: csrftoken.value,
                        email: users['usernames'][`${user_type}`],
                        password: users['password'],
                        lsubmit: 'Login'
                    }
                })
                .then((results) => {
                    Cypress.env('SessionID', results.headers['set-cookie'][1])
                    Cypress.env('KEEP_ALIVE', results.headers['set-cookie'][2])
                })
            })

            if (route) {
                cy.visit(route)
            }
        })
    })
})

Cypress.Commands.add('api_login_sessions', (user_type, route = null) => {
    cy.log('Logging in via API request')
    if (Cypress.env('AUTHENTICATED') === 'True') {
        cy.request({
            method: 'GET',
            url: '/logout'
        })
    }
    cy.session(user_type, () => {
        cy.fixture('users').then((users) => {
            cy.request({
                method: 'GET',
                url: '/infra/csrf'
            }).then(() => {
                cy.getCookie('csrftoken')
                .then((csrftoken) => {
                    console.log({csrftoken})
                    Cypress.env('AUTHENTICATED', 'True')

                    cy.request({
                        method: 'POST',
                        url: '/login',
                        form: true,
                        body: {
                            csrftoken: csrftoken.value,
                            email: users['usernames'][`${user_type}`],
                            password: users['password'],
                            lsubmit: 'Login'
                        }
                    })
                    .then((results) => {
                        Cypress.env('SessionID', results.headers['set-cookie'][1])
                        Cypress.env('KEEP_ALIVE', results.headers['set-cookie'][2])
                    })
                })
            })
        })
    })

    if (route) {
        cy.visit(route)
    }
})