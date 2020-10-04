/// <reference types="cypress" />
describe('page', () => {
  function waitOneSecond() { // copied from https://docs.cypress.io/api/utilities/promise.html#Usage
    // return a promise that resolves after 1 second
    return new Cypress.Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 1000)
    });
  }
  it('does work in sync', () => {
    let users;
    expect(users).to.be.undefined;
    users = ['a','b','c'];
    expect(users).not.to.be.undefined;
  });

  it('does work in async', () => {
    let users;
    expect(users).to.be.undefined;
    waitOneSecond().then(() => {
      users = ['a','b','c'];
    })
    cy.log(users);
  });
  
  it('does not work in async, but should..', () => {
    let users;
    expect(users).to.be.undefined;
    waitOneSecond().then(() => {
      users = ['a','b','c'];
    })
    expect(users).not.to.be.undefined;
  });
  
})
