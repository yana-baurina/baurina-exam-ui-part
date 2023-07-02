//<reference types="cypress"/>

import { faker } from '@faker-js/faker'
import user from '../fixtures/user.json'
import { login } from '../support/helper'

user.email = faker.internet.email();
user.password = faker.internet.password({ length: 8 })
user.middleName = faker.person.middleName();

it('Registration', () => {
  cy.visit('/');
  cy.get('.close-dialog').click();
  cy.get('#navbarAccount').click();
  cy.get('#navbarLoginButton').click();
  cy.get('[class="primary-link"]').click();


  cy.get('#emailControl').type(user.email);
  cy.get('#passwordControl').type(user.password);
  cy.get('#repeatPasswordControl').type(user.password);
  cy.get('#mat-select-2').click();
  cy.get('#mat-option-3').click();
  cy.get('#securityAnswerControl').type(user.middleName);
  cy.get('#registerButton').click();
  cy.get('[class="ng-tns-c70-19"] [class="mat-simple-snack-bar-content"]').contains('text', 'Registration completed successfully. You can now log in.');
  
  cy.clearAllCookies()
  login(user);
})


