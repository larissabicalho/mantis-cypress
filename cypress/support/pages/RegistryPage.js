class RegistryPage {

  selectors = {
    logOfChanges: '.lead'
  }

  validateRegistration(param) {
    cy.get(RegistryPage.selectors.logOfChanges).invoke('text').should('include', param);
  }

}

export default new RegistryPage()