//**********Mapeamento de elementos********** 
//uso de page object 
const el = {
  tituloHomeText: '.user-info',
  resumoLink: ':nth-child(5) > a > .menu-text',
  registroDeMudancas: '.lead'
}


//**********Ações**********
class HomePage {

validarTituloHome(param){
   cy.get(el.tituloHomeText).invoke('text').should('include', param);
}



clicarEmGerenciarColunas(){
  // contains sem seletor
  cy.contains("Gerenciar Colunas").click();
}

clicarEmVerTarefas() {
  const a = cy.get(':nth-child(2) > a > .menu-text')
  a.click();
}

clicarEmResumo() {
  cy.get(el.resumoLink).click();
}

clicarRegistro(){
  cy.get(' a > .menu-text').eq(2).click()

}

 clicarIcone() {
  if(cy.xpath("//i[@class='ace-icon fa fa-angle-double-left']").should('be.visible')){
      cy.xpath("//i[@class='ace-icon fa fa-angle-double-left']").click()
   }
   cy.xpath("//i[@class='ace-icon fa fa-angle-double-right']").click()
} 
}

export default new HomePage()