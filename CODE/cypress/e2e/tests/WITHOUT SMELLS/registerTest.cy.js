
describe('Mantis test', () => {

   const expectedText = {
      register: "No Change Log information available.  Issues are included once projects have versions and issues are resolved with \"fixed in version\" set."
   };

   it('Click in Registration', { tags: '@smoke' } , () => {

      const username = Cypress.config('username');
      const password = Cypress.config('password');

      cy.visit(Cypress.config('baseUrl') + '/login_page.php');
	  
      
      cy.get('[id="username"]').type(username);
      cy.get('input[type="submit"]').click();
      cy.get('[id="password"]').type(password);
      cy.get('input[type="submit"]').click();

      cy.get(':nth-child(4) > a > .menu-text').click();

      cy.get('.lead').invoke('text').should('include', expectedText.register);

   })

})

