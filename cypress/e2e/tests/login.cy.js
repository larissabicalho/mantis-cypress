///<reference types="Cypress"/>
import loginPage from '../../support/pages/LoginPage.js';

Cypress.Commands.add('logout', () => {
  cy.get(':nth-child(3) > .dropdown-toggle > .fa-angle-down').click()
  cy.xpath("//a[@href='/logout_page.php']").click()
})

describe('logged in user', () => {
  beforeEach(()=>{
    //cy.visit(Cypress.config('url')) 
     cy.visit(Cypress.config('url')) 
  })
   afterEach(() => {
       cy.logout()
    });

    it('Clicar no Menu', ()=>{
        //Parametros (Arrange)
        var username = Cypress.config('username')
        var senha = Cypress.config('senha')
     
        //Uso dos métodos das classes de Page (Acts)
        loginPage.preencherUser(username)
        loginPage.clicarLogar()
        loginPage.preencherSenha(senha)
        loginPage.clicarEntrar()      
      
    })  
        
  })


