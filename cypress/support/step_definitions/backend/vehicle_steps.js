// cypress/support/backend/step_definitions/vehicle_steps.js
import { When, Then } from '@badeball/cypress-cucumber-preprocessor';
import VehicleService from '../../backend/services/VehicleService';
import VehicleResponse from '../../backend/responses/VehicleResponse';
import { vehicleSchema } from '../../backend/schemas/vehicle.schema';

let responseWrapper;

When('I send a GET request for vehicle with plate {string}', (plate) => {
  return VehicleService.getVehicleByLicensePlate(plate)
    .then(response => {
      responseWrapper = new VehicleResponse(response);
    });
});

Then('the vehicle response status code should be {int}', (statusCode) => {
  responseWrapper.expectStatusCode(statusCode);
});

Then('the response should contain vehicle details:', (dataTable) => {
  // Validate the entire response against the schema
  responseWrapper.validateSchema(vehicleSchema);
  
  const expectedData = dataTable.hashes().reduce((acc, {field, value}) => {
    acc[field] = value;
    return acc;
  }, {});
  
  Object.entries(expectedData).forEach(([field, value]) => {
    switch(field) {
      case 'brand':
      case 'model':
      case 'energy':
        expect(responseWrapper.body.specifications[field]).to.equal(value);
        break;
      case 'tax_horsepower':
        expect(responseWrapper.body.specifications[field]).to.equal(parseInt(value));
        break;
      case 'version':
        expect(responseWrapper.body.versions[0].version).to.equal(value);
        break;
      default:
        throw new Error(`Unexpected field: ${field}`);
    }
  });
});

Then('the vehicle response should contain error message {string}', (message) => {
  responseWrapper.expectErrorMessage(message);
});