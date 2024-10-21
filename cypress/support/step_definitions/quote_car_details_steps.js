const { Given, When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I am on the Ornikar auto insurance homepage', () => {
  cy.visit('/');
});

When('I click on {string}', (text) => {
  cy.contains('a, button', text).click();
});

When('I choose to search by license plate', () => {
  cy.get('div[role="button"]').contains('Rechercher par plaque').click();
});

When('I enter the license plate number {string}', (licensePlate) => {
  cy.get('input[name="vehiculeImmatriculation"]').type(licensePlate);
});

Then('I should see {string} as the selected vehicle', (vehicleDescription) => {
  cy.get('select[name="vehiculeVersion"] option:selected')
    .should('exist')
    .and('contain.text', vehicleDescription)
    .then((selectedOption) => {
      if (selectedOption.length === 0) {
        cy.get('input[name="vehiculeVersion"]').should('have.value', vehicleDescription);
      }
    });
});

When('I fill in {string} as {string}', (dateType, date) => {
  const [day, month, year] = date.split('/');

  let dayInput, monthInput, yearInput;

  if (dateType === 'car buy date') {
    dayInput = cy.get('input[placeholder="JJ"]').first();
    monthInput = cy.get('input[placeholder="MM"]').first();
    yearInput = cy.get('input[placeholder="AAAA"]').first();
  } else if (dateType === 'insurance coverage start date') {
    dayInput = cy.get('input[placeholder="JJ"]').last();
    monthInput = cy.get('input[placeholder="MM"]').last();
    yearInput = cy.get('input[placeholder="AAAA"]').last();
  }

  dayInput.clear().type(day);
  monthInput.clear().type(month);
  yearInput.clear().type(year);
});

When('I select the payment option {string}', (paymentOption) => {
  cy.contains('span', paymentOption).parent().click({ force: true });
});

Then('I should see the following details:', (dataTable) => {
        const data = dataTable.hashes();
      
        data.forEach((detail) => {
          const { field, value } = detail;
      
          switch (field) {
            case "Plaque d'immatriculation":
              cy.contains('div', value).should('be.visible');
              break;
            case 'Vehicle description':
              cy.contains('div', value).should('be.visible');
              break;
            case 'Mise en circulation':
              cy.contains('div', `Mise en circulation le ${value}`).should('be.visible');
              break;
            case 'Version':
              cy.contains('div', value).should('be.visible');
              break;
            case "Date d'achat":
              cy.contains('div', 'Date d\'achat').should('be.visible');
              cy.contains('div', value).should('be.visible');
              break;
            case "Date de début d'assurance souhaitée":
              cy.contains('div', 'Date de début d\'assurance souhaitée').should('be.visible');
              cy.contains('div', value).should('be.visible');
              break;
            case 'Financement':
              cy.contains('div', 'Financement').should('be.visible');
              cy.contains('div', value).should('be.visible');
              break;
            default:
              throw new Error(`Unknown field: ${field}`);
          }
        });
});
      