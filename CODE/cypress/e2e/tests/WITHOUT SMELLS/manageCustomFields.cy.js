describe('Mantis test', () => {

   it('Manage Test', { tags: '@smoke' }, () => {

      const username = Cypress.config('username');
      const password = Cypress.config('password');
      const customField = "test Automation Larissa Project";

      cy.visit(Cypress.config('baseUrl') + Cypress.env('loginUrl'), { failOnStatusCode: false });

      cy.get('[id="username"]').type(username);
      cy.get('input[type="submit"]').click();
      cy.get('[id="password"]').type(password);
      cy.get('input[type="submit"]').click();

      cy.get(':nth-child(7) > a > .menu-text').click();

      cy.get('a[href="/manage_custom_field_page.php"]').click();

      cy.get('input[class="input-sm"]').type(customField);

      cy.get('input[value="New Custom Field"]').click();

      cy.get('h4').invoke('text').should('include', 'Edit custom field');
     
   })

})
