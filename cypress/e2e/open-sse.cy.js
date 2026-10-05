// Ends the test with an EventSource and an XHR still streaming from /sse-*.
// Nothing navigates afterward, so both connections are still open when the spec finishes.
describe('open SSE streams at end of spec', () => {
  it('receives a first event on both streams, then ends', () => {
    cy.visit('/')
    cy.window().its('got.eventSource').should('eq', true)
    cy.window().its('got.xhr').should('eq', true)
  })
})
