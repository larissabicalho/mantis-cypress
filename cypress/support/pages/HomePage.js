//**********Mapeamento de elementos********** 
//uso de page object 
const el = {
  tituloHomeText: '.user-info'
}

//**********Ações**********
class HomePage {

validarTituloHome(param){
  // contains sem seletor
//  cy.get(el.tituloHomeText).invoke('text').should('include', param);
  cy.contains("Gerenciar Colunas").click();
}

}

export default new HomePage()