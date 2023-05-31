const el = {
    usernameField: '#username',
    senhaField:'#password',
    logarButton: '.width-40'
  }
  class LoginPage {
  
    preencherUser(username){
        cy.get(el.usernameField).type(username)
    }
  
    preencherSenha(senha){
        cy.get(el.senhaField).type(senha)
    }
  // utilizar force true
    clicarLogar(){
        cy.get(el.logarButton).click({force:true})
    }
  
    clicarEntrar(){
        cy.xpath("//input[@value='Entrar']").click()
    }
  
  }
  export default new LoginPage()
