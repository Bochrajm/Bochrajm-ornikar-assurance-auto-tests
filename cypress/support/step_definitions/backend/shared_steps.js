import { Then } from '@badeball/cypress-cucumber-preprocessor';

Then('the response status code should be {int}', (statusCode) => {
  responseWrapper.expectStatusCode(statusCode);
});

Then('the response should contain error message {string}', (message) => {
  responseWrapper.expectErrorMessage(message);
});