///<reference types="Cypress"/>
class RegistryPage {

  selectors = {
    logOfChanges: '.lead'
  }

  validateRegistration(param) {
    cy.get(this.selectors.logOfChanges).invoke('text').should('include', param);
  }

}

export default new RegistryPage()