
describe('Mantis test', () => {

   const expectedText = {
      textMenu: 'Edit User'
   };

   it('Manage Test',  { tags: '@smoke' }, () => {

      const uuid = () => Cypress._.random(0, 1e6)
      const id = uuid()
 
      const username = Cypress.config('username');
      const password = Cypress.config('password');
      const nameUser = `UserTestLarissaProjectAutomationProfile${id}` ;
      const nameReal = `Test Automation Larissa Project Profile${id}`;
      const emailUser = nameUser+"@gmail.com";
      const name = `User Larissa Project Custom Profile${id}`;
      const description = `Test Description Automation LARISSA Project Profile${id}`;
      const descriptionMark = `Test Description Automation Mark Larissa Project Profile${id}`;
      const tagName = `name Tag Larissa Project profile${id}`;
      const customField = `test Automation Larissa Project Field${id}`;
      const platform = `Custom Platform${id}`;
      const so = "Windows";
      const versionOs = id;
      const nameP = name;

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

  
      cy.get('a[href="/manage_proj_page.php"]').click();
   

      cy.xpath('//button[@type="submit" and text()="Create New Project"]').click();

      cy.get('[id="project-name"]').type(name);

      cy.get('[id="project-description"]').type(description);

      cy.xpath('//input[@type="submit"]').click();
      

      cy.get('a').invoke('text').should('include', nameP);

      cy.get('a[href="/manage_tags_page.php"]').click();
   
      cy.get('[id="tag-name"]').type(tagName);
      
      cy.get('[id="tag-description"]').type(descriptionMark);
     
      cy.get('input[name="config_set"]').click();


      cy.get('a').invoke('text').should('include', tagName);

      cy.get('a[href="/manage_custom_field_page.php"]').click();

      cy.get('input[class="input-sm"]').type(customField);

      cy.get('input[value="New Custom Field"]').click();

      cy.get('h4').invoke('text').should('include', 'Edit custom field');

      
      cy.get('a[href="/manage_prof_menu_page.php"]').click();

      cy.get('input[id="platform"]').type(platform);

      cy.get('[id="os"]').type(so);

      cy.get('[id="os-version"]').type(versionOs);

      cy.get('[id="description"').type(description);

      cy.get('input[value="Add Profile"]').click();
   

      cy.get('select').select(platform+ " "+ so + " "+versionOs);

      
   })

})