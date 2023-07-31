// once published, this will be something like import '@cypress/multitab'
// and could go in the support file instead
import '../support/multitab'

describe('multi-tab', () => {
  it('tests a new tab', () => {
    cy.visit('/index.html')
    cy.get('button').click()

    cy.multitab('new-tab.html', async (page) => {
      const paragraph = await page.waitForSelector('p')
      const paragraphText = await page.evaluate(el => el.textContent, paragraph)
      const button = await page.waitForSelector('#send')
      const buttonText = await page.evaluate(el => el.textContent, button)

      button.dispose()
      paragraph.dispose()

      return { paragraphText, buttonText }
    })
    .should('deep.equal', {
      paragraphText: 'This is a paragraph',
      buttonText: 'Send message'
    })
  })
})
