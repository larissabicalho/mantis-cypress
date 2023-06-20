///<reference types="Cypress"/>


import loginPage from '../../support/pages/LoginPage.js';
import homePage from '../../support/pages/HomePage.js';
import registryPage from '../../support/pages/RegistryPage.js';
import createTaskPage from '../../support/pages/CreateTasksPage.js';

import {
   faker
} from '@faker-js/faker';

describe('Mantis test', () => {


   beforeEach(() => {

      cy.visit('http://127.0.0.1:8989')
   })

   it('Sucessfull Login', () => {

      var username = Cypress.config('username')
      var password = Cypress.config('password')
      var expectedText = "administrator"


      loginPage.fillUser(username)
      loginPage.clickLogin()
      loginPage.fillPassword(password)
      loginPage.clickEnter()


      cy.wait(5000)


      homePage.validateTitleHome(expectedText);
   })

   it('Create Task', () => {

      var username = Cypress.config('username')
      var password = Cypress.config('password')
      var expectedText = "Operação realizada com sucesso."


      loginPage.fillUser(username)
      loginPage.clickLogin()
      loginPage.fillPassword(password)
      loginPage.clickEnter()

      homePage.clickViewTasks();
      createTaskPage.clickSelectProject();

      var summary = faker.lorem.lines(1);
      var description = faker.lorem.lines(2)


      createTaskPage.fillSummary(summary);
      createTaskPage.fillDescription(description);
      createTaskPage.clickNewTask()
      createTaskPage.validateTask(expectedText)


   })


   it('Click in Registration', () => {

      var expectedTextRegistro = "Nenhum registro de mudança disponível. Apenas tarefas que indiquem a versão na qual foi resolvida aparecerão nos registros de mudança."
      var username = Cypress.config('username')
      var password = Cypress.config('password')


      loginPage.fillUser(username)
      loginPage.clickLogin()
      loginPage.fillPassword(password)
      loginPage.clickEnter()

      homePage.clickIcon()


      homePage.clickRegistration()

      registryPage.validateRegistration(expectedTextRegistro)


   })

})