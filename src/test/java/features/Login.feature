Feature: Login feature for SwagLab

  Scenario: To test the login functionality for valid users
    Given User has launched swaglab application
    When User enters username password and click on login button
    Then User should be able to see the home page
	
	@Sanity
  Scenario: To test the login functionality for valid users
    Given User has launched swaglab application
    When User enters username "standard_user" password "secret_sauce" and click on login button
    Then User should be able to see the home page

	@Sanity
  Scenario Outline: To test the login functionality for invalid users
    Given User has launched swaglab application
    When User enters username "<UserName>" password "<Passowrd>" and click on login button
    Then User should be getting the error

    Examples: 
      | UserName      | Passowrd     |
      | standard_user |       123123 |
      | asdasdasd     | secret_sauce |
