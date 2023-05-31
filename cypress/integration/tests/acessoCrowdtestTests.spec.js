///<reference types="Cypress"/>

//Import de Page
import loginPage from '../../support/pages/LoginPage.js';
import homePage from '../../support/pages/HomePage.js';

//teste de um mesmo grupo podem ficar dentro de um describe
describe('loginCrowdTest', ()=>{
    
    //uso o beforeEach p este iniciar antes de cada teste (it)
    beforeEach(()=>{
        cy.visit(Cypress.config('url'))  
    })

    it('RealizarLoginSucesso', ()=>{
        //Parametros (Arrange)
        var username = Cypress.config('username')
        var senha = Cypress.config('senha')
        var expectedText = "administrator"

        //Uso dos métodos das classes de Page (Acts)
        loginPage.preencherUser(username)
        loginPage.clicarLogar()
        loginPage.preencherSenha(senha)
        loginPage.clicarEntrar()

        //Validacao (Assert)
        homePage.validarTituloHome(expectedText);   
    })
})
