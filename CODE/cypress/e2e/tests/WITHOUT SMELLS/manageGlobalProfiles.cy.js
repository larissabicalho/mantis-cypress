describe('Mantis test', () => {

   it('Manage Test', () => {

      const username = Cypress.config('username');
      const password = Cypress.config('password');
     
      const description = "Test Description Automation LARISSA Project";
      const platform = "Custom Platform";
      const so = "Windows";
      const versionOs = "14";
     

      cy.visit(Cypress.config('baseUrl') + Cypress.env('loginUrl'), { failOnStatusCode: false });

      cy.get('[id="username"]').type(username);
      cy.get('input[type="submit"]').click();
      cy.get('[id="password"]').type(password);
      cy.get('input[type="submit"]').click();

      cy.get(':nth-child(7) > a > .menu-text').click();
     
      cy.get('a[href="/manage_prof_menu_page.php"]').click();

      cy.get('input[id="platform"]').type(platform);

      cy.get('[id="os"]').type(so);

      cy.get('[id="os-version"]').type(versionOs);

      cy.get('[id="description"').type(description);

      cy.get('input[value="Add Profile"]').click();
   

      cy.get('select').select(platform+ " "+ so + " "+versionOs);
     
   })

})
