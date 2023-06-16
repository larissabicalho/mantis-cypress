const el = {
    usernameField: '#username',
    passwordField:'#password',
    logButton: '.width-40'
  }
  class LoginPage {
  
fillUser(username){
   cy.get(el.usernameField).type(username)
}

fillPassword(password){
    cy.get(el.passwordField).type(password)
}

clickLogin(){
    cy.get(el.logButton).click({force:true})
}

clickEnter(){
    cy.xpath("//input[@value='Entrar']").should("be.visible").click()
 }

}
  export default new LoginPage()
