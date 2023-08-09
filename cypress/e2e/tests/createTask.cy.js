

describe('Mantis test', () => {

   const expectedText = {
      taskExpect: "Operation successful."
   };

   it('Create Task', { tags: '@smoke' }, () => {
     

      const username = Cypress.config('username');
      const password = Cypress.config('password');

      cy.visit(Cypress.config('baseUrl') + Cypress.env('loginUrl'), { failOnStatusCode: false });

      cy.get('[id="username"]').type(username);
      cy.get('input[type="submit"]').click();
      cy.get('[id="password"]').type(password);
      cy.get('input[type="submit"]').click();


      cy.get(':nth-child(3) > a > .menu-text').click();

      cy.get('input[value="Select Project"]').click();

      const uuid = () => Cypress._.random(0, 1e6)
      const id = uuid()
      const testname = `testname${id}`
      const testSummary = `summary${id}`

      const summary = testname
      const description = testSummary

      cy.get('[id="summary"]').type(summary);
   
      cy.get('[id="description"]').type(description);

      cy.get('input[value="Submit Issue"]').click();

      cy.get('.bold').invoke('text').should('include', expectedText.taskExpect);


   })

})