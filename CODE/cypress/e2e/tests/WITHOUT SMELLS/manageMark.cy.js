describe('Mantis test', () => {

 
   it('Manage Test', { tags: '@smoke' } , () => {

      const username = Cypress.config('username');
      const password = Cypress.config('password');
   
      const descriptionMark = "Test Description Automation Mark Larissa Project";
      const tagName = "name Tag Larissa Project";

      cy.visit(Cypress.config('baseUrl') + Cypress.env('loginUrl'), { failOnStatusCode: false });

      cy.get('[id="username"]').type(username);
      cy.get('input[type="submit"]').click();
      cy.get('[id="password"]').type(password);
      cy.get('input[type="submit"]').click();

      cy.get(':nth-child(7) > a > .menu-text').click();

      cy.get('a[href="/manage_tags_page.php"]').click();
   
      cy.get('[id="tag-name"]').type(tagName);
     
      cy.get('[id="tag-description"]').type(descriptionMark);
     
      cy.get('input[name="config_set"]').click();


      cy.get('a').invoke('text').should('include', tagName);
     
   })

})
