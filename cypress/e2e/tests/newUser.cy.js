
describe('Mantis test', () => {

   const expectedText = {
      textMenu: 'Edit User'
   };

   it('New User',  { tags: '@smoke' }, () => {

      const username = Cypress.config('username');
      const password = Cypress.config('password');
   
      const uuid = () => Cypress._.random(0, 1e6)
      const id = uuid()

      const nameUser = `UserTestLarissaProjectAutomationProfile${id}` ;
      const nameReal = `Test Automation Larissa Project Profile${id}`;
      const emailUser = nameUser+"@gmail.com";

      cy.visit(Cypress.config('baseUrl') + Cypress.env('loginUrl'), { failOnStatusCode: false });

      cy.get('[id="username"]').type(username);
      cy.get('input[type="submit"]').click();
      cy.get('[id="password"]').type(password);
      cy.get('input[type="submit"]').click();

      cy.get(':nth-child(7) > a > .menu-text').click();

      cy.get('a[href="/manage_user_page.php"]').click();


      cy.get('a').contains('Create New Account').click();

    
      cy.get('[id="user-username"]').type(nameUser);
       
      cy.get('[id="user-realname"]').type(nameReal);
        
      cy.get('[id="email-field"]').type(emailUser);

   
      
      cy.get('input[value="Create User"]').click();
      
  
      cy.get('#edit-user-form > .widget-box > .widget-header > .widget-title').invoke('text').should('include', expectedText.textMenu);

   })

})