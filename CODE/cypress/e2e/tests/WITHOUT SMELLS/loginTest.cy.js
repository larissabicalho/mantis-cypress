
describe('TEST', () => {

   const expectedText = {
      textMenu: 'administrator'
   };
    
     it('Login Test', { tags: '@smoke' }, () => {
	 
      const username = Cypress.config('username');
      const password = Cypress.config('password');
      const baseUrl = Cypress.config('baseUrl');
    

      cy.visit(Cypress.config('baseUrl') + Cypress.env('loginUrl'), { failOnStatusCode: false });

      cy.get('[id="username"]').type(username);
      cy.get('input[type="submit"]').click();
      cy.get('[id="password"]').type(password);
      cy.get('input[type="submit"]').click();

      cy.get('.user-info').invoke('text').should('include', expectedText.textMenu);
   });
});