Feature: Home Page Diet Meal

    Scenario: As a user, I can fill form and see home page Diet Meal

        Given I am on the home page
        When I fill all field
        And I click "Next" button
        And I choose activity
        And I click "Selesai" button
        Then I should see calories card
