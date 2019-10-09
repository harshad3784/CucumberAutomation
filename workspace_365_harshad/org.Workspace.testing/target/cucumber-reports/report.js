$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("TestCaseOne.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "#Author: Harshad"
    },
    {
      "line": 2,
      "value": "#Feature: Generic Feedback scenarios"
    },
    {
      "line": 3,
      "value": "#Background: List of steps run before each of the scenarios"
    }
  ],
  "line": 5,
  "name": "Generic feedback",
  "description": "To check that the feedback button exists and functions as expected on the Homepage",
  "id": "generic-feedback",
  "keyword": "Feature",
  "tags": [
    {
      "line": 4,
      "name": "@TestCase1"
    }
  ]
});
formatter.scenario({
  "line": 9,
  "name": "As a user, he/she should be able to add a personal Group",
  "description": "",
  "id": "generic-feedback;as-a-user,-he/she-should-be-able-to-add-a-personal-group",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "User has navigated to workspace365",
  "keyword": "Given "
});
formatter.step({
  "line": 12,
  "name": "enter username \"chalenge@qachallenge.onmicrosoft.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click on next button",
  "keyword": "Then "
});
formatter.step({
  "line": 14,
  "name": "enter the password \"5A{]sAmESecF}[:k\"",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 16,
  "name": "click on no",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "click on Groups drop down",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "click on new personal group link",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "click on Add group header",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "enter new personal group title \"TestAutomationDemo\"",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "click save button",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "365",
      "offset": 31
    }
  ],
  "location": "StepDefinition.user_has_navigated_to_workspace(int)"
});
formatter.result({
  "duration": 5248843655,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chalenge@qachallenge.onmicrosoft.com",
      "offset": 16
    }
  ],
  "location": "StepDefinition.enter_username(String)"
});
formatter.result({
  "duration": 5392646131,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_next_button()"
});
formatter.result({
  "duration": 5182599695,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5A{]sAmESecF}[:k",
      "offset": 20
    }
  ],
  "location": "StepDefinition.enter_the_password(String)"
});
formatter.result({
  "duration": 308557921,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_submit_button()"
});
formatter.result({
  "duration": 5500402851,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_no()"
});
formatter.result({
  "duration": 3975995155,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_Groups_drop_down()"
});
formatter.result({
  "duration": 200687905,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_new_personal_group_link()"
});
formatter.result({
  "duration": 374116186,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_Add_group_header()"
});
formatter.result({
  "duration": 90513292,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TestAutomationDemo",
      "offset": 32
    }
  ],
  "location": "StepDefinition.enter_new_personal_group_title(String)"
});
formatter.result({
  "duration": 2428206334,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_save_button()"
});
formatter.result({
  "duration": 2100184471,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.close_browser()"
});
formatter.result({
  "duration": 5000044213,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.StepDefinition.close_browser(StepDefinition.java:137)\r\n\tat ✽.And close browser(TestCaseOne.feature:22)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 25,
  "name": "As a user, he/she should be able to add tiles to the group",
  "description": "",
  "id": "generic-feedback;as-a-user,-he/she-should-be-able-to-add-tiles-to-the-group",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "User has navigated to workspace365",
  "keyword": "Given "
});
formatter.step({
  "line": 28,
  "name": "enter username \"chalenge@qachallenge.onmicrosoft.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "click on next button",
  "keyword": "Then "
});
formatter.step({
  "line": 30,
  "name": "enter the password \"5A{]sAmESecF}[:k\"",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 32,
  "name": "click on no",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "click on edit workspace",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "click on add tiles",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "add applications",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "click on add workspace button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "click save button",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "close browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "365",
      "offset": 31
    }
  ],
  "location": "StepDefinition.user_has_navigated_to_workspace(int)"
});
formatter.result({
  "duration": 3792606339,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chalenge@qachallenge.onmicrosoft.com",
      "offset": 16
    }
  ],
  "location": "StepDefinition.enter_username(String)"
});
formatter.result({
  "duration": 5261542233,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_next_button()"
});
formatter.result({
  "duration": 5152935599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5A{]sAmESecF}[:k",
      "offset": 20
    }
  ],
  "location": "StepDefinition.enter_the_password(String)"
});
formatter.result({
  "duration": 145743501,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_submit_button()"
});
formatter.result({
  "duration": 5487335963,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_no()"
});
formatter.result({
  "duration": 2058550519,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_edit_workspace()"
});
formatter.result({
  "duration": 5506871357,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_add_tiles()"
});
formatter.result({
  "duration": 3224101008,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.add_applications()"
});
formatter.result({
  "duration": 6397684428,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_add_workspace_button()"
});
formatter.result({
  "duration": 8243568897,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_save_button()"
});
formatter.result({
  "duration": 3148014939,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.close_browser()"
});
formatter.result({
  "duration": 4998218062,
  "error_message": "java.lang.NullPointerException\r\n\tat stepDefinitions.StepDefinition.close_browser(StepDefinition.java:137)\r\n\tat ✽.And close browser(TestCaseOne.feature:38)\r\n",
  "status": "failed"
});
formatter.scenario({
  "line": 46,
  "name": "As a user, he/she should be able to delete the testAutomationDemo Group",
  "description": "",
  "id": "generic-feedback;as-a-user,-he/she-should-be-able-to-delete-the-testautomationdemo-group",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 47,
  "name": "User has navigated to workspace365",
  "keyword": "Given "
});
formatter.step({
  "line": 49,
  "name": "enter username \"chalenge@qachallenge.onmicrosoft.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "click on next button",
  "keyword": "Then "
});
formatter.step({
  "line": 51,
  "name": "enter the password \"5A{]sAmESecF}[:k\"",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "click on submit button",
  "keyword": "Then "
});
formatter.step({
  "line": 53,
  "name": "click on no",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "click on edit workspace",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "click on delete Group",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "click save button",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "365",
      "offset": 31
    }
  ],
  "location": "StepDefinition.user_has_navigated_to_workspace(int)"
});
formatter.result({
  "duration": 3741440559,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "chalenge@qachallenge.onmicrosoft.com",
      "offset": 16
    }
  ],
  "location": "StepDefinition.enter_username(String)"
});
formatter.result({
  "duration": 5275407321,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_next_button()"
});
formatter.result({
  "duration": 5063914492,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "5A{]sAmESecF}[:k",
      "offset": 20
    }
  ],
  "location": "StepDefinition.enter_the_password(String)"
});
formatter.result({
  "duration": 351384831,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_submit_button()"
});
formatter.result({
  "duration": 5506491994,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_no()"
});
formatter.result({
  "duration": 7584414477,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_edit_workspace()"
});
formatter.result({
  "duration": 3442376965,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_on_delete_button()"
});
formatter.result({
  "duration": 29589092,
  "status": "passed"
});
formatter.match({
  "location": "StepDefinition.click_save_button()"
});
formatter.result({
  "duration": 2174357541,
  "status": "passed"
});
});