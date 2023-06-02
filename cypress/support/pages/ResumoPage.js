//**********Mapeamento de elementos********** 
//uso de page object 
const el = {
 selector: '.user-info',
  resumoLink: ':nth-child(5) > a > .menu-text'
}


//**********Ações**********
class ResumoPage {

porResolucao(){
  cy.contains("Por Resolução").should('be.visible')
}

}

export default new ResumoPage()