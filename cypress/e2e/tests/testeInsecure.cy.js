///<reference types="Cypress"/>

describe('Tests With External URL', ()=>{


    it('Insecure Test', ()=>{
        cy.visit('https://example.cypress.io')
        cy.get(':nth-child(4) > .row > .col-xs-12 > .home-list > :nth-child(1) > ul > :nth-child(1)').click()
        
    })

})

