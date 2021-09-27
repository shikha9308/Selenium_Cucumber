$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login feature for SwagLab",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To test the login functionality for valid users",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has launched swaglab application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_has_launched_swaglab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"standard_user\" password \"secret_sauce\" and click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_username_something_password_something_and_click_on_login_button(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_be_able_to_see_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "To test the login functionality for invalid users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.step({
  "name": "User has launched swaglab application",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters username \"\u003cUserName\u003e\" password \"\u003cPassowrd\u003e\" and click on login button",
  "keyword": "When "
});
formatter.step({
  "name": "User should be getting the error",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Passowrd"
      ]
    },
    {
      "cells": [
        "standard_user",
        "123123"
      ]
    },
    {
      "cells": [
        "asdasdasd",
        "secret_sauce"
      ]
    }
  ]
});
formatter.scenario({
  "name": "To test the login functionality for invalid users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has launched swaglab application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_has_launched_swaglab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"standard_user\" password \"123123\" and click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_username_something_password_something_and_click_on_login_button(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be getting the error",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.User_should_be_getting_the_error()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the login functionality for invalid users",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has launched swaglab application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_has_launched_swaglab_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters username \"asdasdasd\" password \"secret_sauce\" and click on login button",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_username_something_password_something_and_click_on_login_button(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be getting the error",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.User_should_be_getting_the_error()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});