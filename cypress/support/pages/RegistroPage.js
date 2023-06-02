//**********Mapeamento de elementos********** 
//uso de page object 
const el = {
  registroDeMudancas: '.lead'
}


//**********Ações**********
class RegistroPage {


validarRegistro(param){
  cy.get(el.registroDeMudancas).invoke('text').should('include', param);
}


}

export default new RegistroPage()