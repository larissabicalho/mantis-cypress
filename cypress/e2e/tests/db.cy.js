///<reference types="Cypress"/>


describe('Reset DB', () => {
  beforeEach(() => {
   
    cy.exec('npm run db:reset && npm run db:seed')
  })

  it('successfully loads', () => {
    cy.visit('/')
  })

})

