const el = {
  selectProject: '.widget-toolbox > .btn',
  summaryLabel: '#summary',
  descriptionLabel: '#description',
  newTaskButton: '.widget-toolbox > .btn',
  operation: '.bold'
}

class CreateTaskPage {

  clickSelectProject() {
     cy.get(el.selectProject).click()
  }

  fillSummary(summaryN) {
     cy.get(el.summaryLabel).type(summaryN)
  }

  fillDescription(descriptionN) {
     cy.get(el.descriptionLabel).type(descriptionN)
  }

  clickNewTask() {
     cy.get(el.newTaskButton).click()
  }

  validateTask(param) {
     cy.get(el.operation).invoke('text').should('include', param);
  }


}
export default new CreateTaskPage()