///<reference types="Cypress"/>
import loginPage from '../../support/pages/LoginPage.js';

Cypress.Commands.add('logout', () => {
   cy.get(':nth-child(3) > .dropdown-toggle > .fa-angle-down').click()
   cy.xpath("//a[@href='/logout_page.php']").click()
})

describe('logged in user', () => {
   beforeEach(() => {

      cy.visit(Cypress.config('url'))
   })


   afterEach(() => {
      cy.logout()
   });

   it('Logout Test', () => {

      var username = Cypress.config('username')
      var password = Cypress.config('password')


      loginPage.fillUser(username)
      loginPage.clickLogin()
      loginPage.fillPassword(password)
      loginPage.clickEnter()

   })

})