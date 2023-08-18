
import registryPage from '../../support/pages/RegistryPage.js';

describe('Mantis test', () => {
  
   
   const expectedText = {
      register: "No Change Log information available.  Issues are included once projects have versions and issues are resolved with \"fixed in version\" set."
   };

   it('Click in Registration', () => {

      const username = Cypress.config('username');
      const password = Cypress.config('password');

      cy.visit(Cypress.config('baseUrl') + Cypress.env('loginUrl'), { failOnStatusCode: false });
	  
      
      cy.get('[id="username"]').type(username);
      cy.get('input[type="submit"]').click();
      cy.get('[id="password"]').type(password);
      cy.get('input[type="submit"]').click();

      cy.get(':nth-child(4) > a > .menu-text').click();

      registryPage.validateRegistration(expectedText.register);

   })

})