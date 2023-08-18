
import {
   faker
} from '@faker-js/faker';


describe('Project', () => {


   it('Create Project',  { tags: '@smoke' }, () => {

      const username = Cypress.config('username');
      const password = Cypress.config('password');
      

      cy.visit(Cypress.config('baseUrl') + Cypress.env('loginUrl'), { failOnStatusCode: false });


      cy.get('[id="username"]').type(username);
      cy.get('input[type="submit"]').click();
      cy.get('[id="password"]').type(password);
      cy.get('input[type="submit"]').click();

      cy.get('a > .menu-text').eq(6).click();

      cy.get('a[href="/manage_proj_page.php"]').click();
   
    
      const name = faker.name.jobTitle();
      const description = faker.lorem.lines(2);
      const nameP = name;

      cy.get('.row > .nav > > a').eq(2).click();

   
      cy.get('[id="project-name"]').type(name);

      cy.get('[id="project-description"]').type(description);

      cy.xpath('//input[@type="submit"]').click();
      

      cy.get('a').invoke('text').should('include', nameP);

   })
})