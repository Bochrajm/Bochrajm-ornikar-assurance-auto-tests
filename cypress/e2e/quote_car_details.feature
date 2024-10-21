Feature: Insurance Quote car details

Scenario: Start auto insurance quote with license plate
  Given I am on the Ornikar auto insurance homepage
  When I click on "J'obtiens mon tarif"
  And I choose to search by license plate
  And I enter the license plate number "BV788WA"
  And I click on "Confirmer"
  Then I should see "AUDI A4 2.0 TDI ATTRACTION" as the selected vehicle
  And I click on "Continuer"
  And I fill in "car buy date" as "01/01/2025"
  And I click on "Continuer"
  And I fill in "insurance coverage start date" as "01/01/2025"
  And I click on "Continuer"
  And I select the payment option "Au comptant"
  Then I should see the following details:
    | field                                | value                      |
    | Plaque d'immatriculation             | BV788WA                    |
    | Vehicle description                  | AUDI, A4, 8CV - GASOIL      |
    | Mise en circulation                  | 03/10/2011                 |
    | Version                              | AUDI A4 2.0 TDI ATTRACTION |
    | Date d'achat                         | 01/01/2025                 |
    | Date de début d'assurance souhaitée  | 01/01/2025                 |
    | Financement                          | Au comptant                |