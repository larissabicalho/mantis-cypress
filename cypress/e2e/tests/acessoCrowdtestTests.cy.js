///<reference types="Cypress"/>

//Import de Page
import loginPage from '../../support/pages/LoginPage.js';
import homePage from '../../support/pages/HomePage.js';
import resumoPage from '../../support/pages/ResumoPage.js';
import registroPage from '../../support/pages/RegistroPage.js';

//teste de um mesmo grupo podem ficar dentro de um describe
describe('loginCrowdTest', ()=>{
    
    //uso o beforeEach p este iniciar antes de cada teste (it)
    beforeEach(()=>{
        //cy.visit(Cypress.config('url')) 
         cy.visit('http://127.0.0.1:8989') 
    })

    it('Clicar no Menu', ()=>{
        //Parametros (Arrange)
        var username = Cypress.config('username')
        var senha = Cypress.config('senha')
     
        //Uso dos métodos das classes de Page (Acts)
        loginPage.preencherUser(username)
        loginPage.clicarLogar()
        loginPage.preencherSenha(senha)
        loginPage.clicarEntrar()

        homePage.clicarIcone()      
        
    })

    it('Clicar em Registro', ()=>{
        //Parametros (Arrange)
        var username = Cypress.config('username')
        var senha = Cypress.config('senha')
        var expectedTextRegistro = "Nenhum registro de mudança disponível. Apenas tarefas que indiquem a versão na qual foi resolvida aparecerão nos registros de mudança."
    
        //Uso dos métodos das classes de Page (Acts)
        loginPage.preencherUser(username)
        loginPage.clicarLogar()
        loginPage.preencherSenha(senha)
        loginPage.clicarEntrar()

        homePage.clicarRegistro()

        registroPage.validarRegistro(expectedTextRegistro)
        
        
    })
})
