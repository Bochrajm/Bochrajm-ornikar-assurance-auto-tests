import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import VehicleService from '../../backend/services/VehicleService';
import VehicleResponse from '../../backend/responses/VehicleResponse';
import { communeSchema } from '../../backend/schemas/commune.schema';

let responseWrapper;

When('I send a GET request for commune with ZIP code {string}', (zipCode) => {
  return VehicleService.getCommunesByZipCode(zipCode)
    .then(response => {
      responseWrapper = new VehicleResponse(response);
    });
});

Then('the commune response status code should be {int}', (statusCode) => {
  responseWrapper.expectStatusCode(statusCode);
});

Then('the response should contain commune details:', (dataTable) => {
  responseWrapper.validateSchema(communeSchema);
  
  expect(responseWrapper.body).to.be.an('array').and.have.length.above(0);
  
  const expectedData = dataTable.hashes().reduce((acc, {field, value}) => {
    acc[field] = value;
    return acc;
  }, {});
  
  Object.entries(expectedData).forEach(([field, value]) => {
    switch(field) {
      case 'name':
        expect(responseWrapper.body[0].commune).to.equal(value);
        break;
      default:
        throw new Error(`Unexpected field: ${field}`);
    }
  });
});

Then('the commune response should be empty', () => {
  expect(responseWrapper.body).to.be.an('array').that.is.empty;
});