
const el = {
  logOfChanges: '.lead'
}

class RegistryPage {


  validateRegistration(param) {
    cy.get(el.logOfChanges).invoke('text').should('include', param);
  }


}

export default new RegistryPage()