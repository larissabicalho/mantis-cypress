describe('Mantis test', () => {

   it('Manage Test', { tags: '@smoke' } ,  () => {

      const username = Cypress.config('username');
      const password = Cypress.config('password');

      const name = "User Larissa Project Custom";
      const description = "Test Description Automation LARISSA Project";
      const nameP = name;

      cy.visit(Cypress.config('baseUrl') + Cypress.env('loginUrl'), { failOnStatusCode: false });

      cy.get('[id="username"]').type(username);
      cy.get('input[type="submit"]').click();
      cy.get('[id="password"]').type(password);
      cy.get('input[type="submit"]').click();

      cy.get(':nth-child(7) > a > .menu-text').click();
 
      cy.get('a[href="/manage_proj_page.php"]').click();
   

      cy.xpath('//button[@type="submit" and text()="Create New Project"]').click();

      cy.get('[id="project-name"]').type(name);

      cy.get('[id="project-description"]').type(description);

      cy.xpath('//input[@type="submit"]').click();
     

      cy.get('a').invoke('text').should('include', nameP);

     
   })

})
