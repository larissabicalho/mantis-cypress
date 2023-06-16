const el = {
  titleHomeText: '.user-info',
  summaryLink: ':nth-child(5) > a > .menu-text',
  selectProject: '.widget-toolbox > .btn'
}

class HomePage {

validateTitleHome(param){
   cy.get(el.titleHomeText).invoke('text').should('include', param);
}

clickManage(){
  cy.contains("Gerenciar").click();
}

clickViewTasks(){
 const a = cy.get(':nth-child(3) > a > .menu-text')
  a.click();
}

clickOnSummary() {
  cy.get(el.summaryLink).click();
}


clickRegistration(){
  cy.get(' a > .menu-text').eq(3).click()

}

clickIcon() {
  if(cy.xpath("//i[@class='ace-icon fa fa-angle-double-left']").should('be.visible')){
      cy.xpath("//i[@class='ace-icon fa fa-angle-double-left']").click()
   }
   cy.xpath("//i[@class='ace-icon fa fa-angle-double-right']").click()
 } 

}

export default new HomePage()