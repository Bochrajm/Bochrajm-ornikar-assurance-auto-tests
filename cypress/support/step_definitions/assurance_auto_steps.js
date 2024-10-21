// cypress/support/step_definitions/assurance_auto_steps.js
const { Given, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I navigate to the Assurance Auto page', () => {
  cy.visit('/');
});

Then('I should see the page title as {string}', (expectedTitle) => {
  cy.title().should('eq', expectedTitle);
});
