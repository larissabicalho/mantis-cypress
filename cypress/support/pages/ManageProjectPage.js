const el = {
  clickManage: '.widget-toolbox > .form-inline > fieldset > .btn',
  projectName: '#project-name',
  descriptionLabel: '#project-description',
  addButton: '.widget-toolbox > .btn'
}

class ManageProjectPage {


  clickManageProject() {
     cy.contains("Gerenciar Projeto").click();
  }

  clickProject() {
     cy.get(el.clickManage).click()
  }


  fillName(name) {
     cy.get(el.projectName).type(name)
  }

  fillDescription(description) {
     cy.get(el.descriptionLabel).type(description)
  }

  clickAdd() {
     cy.get(el.addButton).click()
  }

  validateProject(param) {
     cy.xpath('(//a[contains(text(),"' + param + '")])[1]').invoke('text').should('include', param);
  }

}
export default new ManageProjectPage()