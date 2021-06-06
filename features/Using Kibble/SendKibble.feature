Feature: Using Kibble
  Scenario: Sending Kibble from one account to another works as intended
    Given sender is "Alice"
    Given receiver is "Bob"
    When sender sends 50 Kibble to receiver
    Then receiver Kibble balance is 50