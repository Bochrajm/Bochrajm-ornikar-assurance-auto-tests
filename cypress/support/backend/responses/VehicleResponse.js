export default class VehicleResponse {
  constructor(response) {
    this.response = response;
    this.body = response.body;
    this.status = response.status;
  }

  validateSchema(schema) {
    const Ajv = require('ajv');
    const ajv = new Ajv();
    const validate = ajv.compile(schema);
    const valid = validate(this.body);
    
    if (!valid) {
      throw new Error(`Schema validation failed: ${JSON.stringify(validate.errors)}`);
    }
    return this;
  }

  expectStatusCode(statusCode) {
    expect(this.status).to.equal(statusCode);
    return this;
  }

  expectErrorMessage(message) {
    expect(this.body).to.have.property('error');
    expect(this.body.error).to.include(message);
    return this;
  }

  expectVehicleDetails(expectedDetails) {
    Object.entries(expectedDetails).forEach(([field, value]) => {
      expect(this.body[field]).to.equal(value);
    });
    return this;
  }

  expectBrandsList() {
    expect(this.body).to.be.an('array');
    expect(this.body.length).to.be.greaterThan(0);
    return this;
  }

  expectModelsList() {
    expect(this.body).to.be.an('array');
    expect(this.body.length).to.be.greaterThan(0);
    return this;
  }

  expectCommuneDetails(expectedDetails) {
    Object.entries(expectedDetails).forEach(([field, value]) => {
      expect(this.body[field]).to.equal(value);
    });
    return this;
  }
}
