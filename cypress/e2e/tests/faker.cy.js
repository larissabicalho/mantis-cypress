///<reference types="Cypress"/>

//Import de Page
import loginPage from '../../support/pages/LoginPage.js';
import homePage from '../../support/pages/HomePage.js';
import manageProjectPage from '../../support/pages/ManageProjectPage.js';

import { faker } from '@faker-js/faker';


describe('loginCrowdTest', ()=>{
    
    
    beforeEach(()=>{
       
         cy.visit('http://127.0.0.1:8989') 
    })

    it('Create Project', ()=>{
       
        var username = Cypress.config('username')
        var password = Cypress.config('password')
    
       
        loginPage.fillUser(username)
        loginPage.clickLogin()
        loginPage.fillPassword(password)
        loginPage.clickEnter()

     
        homePage.clickManage();  


        manageProjectPage.clickProject()

      

        var name = faker.name.jobTitle()
        var description = faker.lorem.lines(2)
        var nameP = name

        manageProjectPage.fillName(name)

        manageProjectPage.fillDescription(description)
        manageProjectPage.clickAdd()      

        manageProjectPage.validateProject(nameP)
        
    })
})
