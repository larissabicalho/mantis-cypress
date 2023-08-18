describe('Test', () => {

   const expectedText = {
      textMenu: 'administrator',
      register: "No Change Log information available.  Issues are included once projects have versions and issues are resolved with \"fixed in version\" set."
      
   };

     beforeEach(() => {
      
      const username = Cypress.config('username');
      const password = Cypress.config('password');

      cy.visit(Cypress.config('baseUrl') + Cypress.env('loginUrl'), { failOnStatusCode: false });
     
     
      cy.get('[id="username"]').type(username);
      cy.get('input[type="submit"]').click();
      cy.get('[id="password"]').type(password);
      cy.get('input[type="submit"]').click();

   });
 
     it('Login Test', { tags:'@smoke' } , () => {

      cy.get('.user-info').invoke('text').should('include', expectedText.textMenu);

   });

   it('Click in Registration', { tags:'@smoke' } , () => {

      cy.get(':nth-child(4) > a > .menu-text').click();

      cy.get('.lead').invoke('text').should('include', expectedText.register);

   })

})
