class VehicleService {
  getVehicleByLicensePlate(licensePlate) {
    return cy.request({
      method: 'GET',
      url: `/api/v2/vehicles/license-plate/${licensePlate}`,
      failOnStatusCode: false
    });
  }

  getAllBrands() {
    return cy.request({
      method: 'GET',
      url: '/vehicles/brands',
      failOnStatusCode: false
    });
  }

  getModelsByBrand(brand) {
    return cy.request({
      method: 'GET',
      url: `/vehicles/brands/${encodeURIComponent(brand)}/models`,
      failOnStatusCode: false
    });
  }

  getCommunesByZipCode(zipCode) {
    return cy.request({
      method: 'GET',
      url: `/communes/${zipCode}`,
      failOnStatusCode: false
    });
  }
}

export default new VehicleService();
