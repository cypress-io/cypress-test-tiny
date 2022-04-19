# cypress-test-tiny

> Tiny Cypress E2E test case to reproduce redirect error

# Description of the issue

It seems that when the page being visited by Cypress attempts to change the location before the load event is triggered, Cypress will then wait forever for the load event, even after the new page has been fully loaded.

Page that's being visited:

```html
<!DOCTYPE html>
<html>
    <script type="text/javascript">
        // uncomment this line to trigger bug:
        window.location.replace('https://warpdesign.fr/tests/gh.html')
    </script>
    <body>
        Redirect Test
    </body>
</html>
```

This simple test will trigger a timeout error when visiting the above page:


```js
/// <reference types="cypress" />
describe('page', () => {
  it('triggers a timeout error', () => {
    cy.visit('/index2.html')
  })
})
```
