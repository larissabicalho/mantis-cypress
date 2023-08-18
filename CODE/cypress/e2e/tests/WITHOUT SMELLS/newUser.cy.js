describe('Tests With External URL', () => {

   it('Mantis Test', () => {
      cy.visit('http://127.0.0.1:8989/login_page.php') // example URL Local
      cy.get('#navbar > :nth-child(1) > :nth-child(3) > a').click()
      cy.get('.container > p').invoke('text').should('include', 'Examples of uses of the Cypress API, for a full reference, go to');

   })

})
