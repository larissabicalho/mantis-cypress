///<reference types="Cypress"/>

describe('Tests With External URL', () => {


    it('Insecure Test', () => {
       cy.visit('https://example.cypress.io')
       cy.get('#navbar > :nth-child(1) > :nth-child(3) > a').click()
       cy.get('.container > p').invoke('text').should('include', 'Examples of uses of the Cypress API, for a full reference, go to');
 
    })
 
 })