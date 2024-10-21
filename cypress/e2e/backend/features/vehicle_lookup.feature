Feature: Vehicle Information Lookup

Scenario: Successfully retrieve vehicle details by license plate
  When I send a GET request for vehicle with plate "BV788WA"
  Then the vehicle response status code should be 200
  And the response should contain vehicle details:
    | field          | value                     |
    | brand          | AUDI                      |
    | model          | A4                        |
    | energy         | GASOIL                    |
    | tax_horsepower | 8                         |
    | version        | AUDI A4 2.0 TDI ATTRACTION|

Scenario: Try to retrieve vehicle details with invalid license plate
  When I send a GET request for vehicle with plate "INVALID"
  Then the vehicle response status code should be 400
  And the vehicle response should contain error message "BadRequest"