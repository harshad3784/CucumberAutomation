#Author: Harshad
#Feature: Generic Feedback scenarios
#Background: List of steps run before each of the scenarios
@TestCase1 
Feature: Generic feedback 
	To check that the feedback button exists and functions as expected on the Homepage

		
Scenario: As a user, he/she should be able to add a personal Group 
	Given User has navigated to workspace365
	
	And enter username "chalenge@qachallenge.onmicrosoft.com"
	Then click on next button
	And enter the password "5A{]sAmESecF}[:k"
	Then click on submit button
	And click on no
	And click on Groups drop down
	And click on new personal group link
	And click on Add group header
	And enter new personal group title "TestAutomationDemo"
	And click save button
	And close browser


Scenario: As a user, he/she should be able to add tiles to the group 
	Given User has navigated to workspace365
	
	And enter username "chalenge@qachallenge.onmicrosoft.com"
	Then click on next button
	And enter the password "5A{]sAmESecF}[:k"
	Then click on submit button
	And click on no
	And click on edit workspace
	And click on add tiles
	And add applications
	And click on add workspace button
	And click save button	
	And close browser
	
	
	

	
	

Scenario: As a user, he/she should be able to delete the testAutomationDemo Group 
	Given User has navigated to workspace365
	
	And enter username "chalenge@qachallenge.onmicrosoft.com"
	Then click on next button
	And enter the password "5A{]sAmESecF}[:k"
	Then click on submit button
	And click on no
	And click on edit workspace
	And click on delete Group
	And click save button