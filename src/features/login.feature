Feature: Login Functionality

  Scenario: Successful login with valid credentials
    Given I am on the login page
    When I fill in the login form with valid credentials
    And I click the login button
    Then I should see the dashboard