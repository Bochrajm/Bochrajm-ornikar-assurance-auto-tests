Feature: Commune Information Lookup

Scenario: Successfully retrieve commune information for Argenteuil
  When I send a GET request for commune with ZIP code "95100"
  Then the commune response status code should be 200
  And the response should contain commune details:
    | field | value      |
    | name  | ARGENTEUIL |

Scenario: Try to retrieve commune with invalid ZIP code
  When I send a GET request for commune with ZIP code "00000"
  Then the commune response status code should be 200
  And the commune response should be empty