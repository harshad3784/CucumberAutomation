#Author: Harshad
#Feature: Generic Feedback scenarios
#Background: List of steps run before each of the scenarios
@tag 
Feature: Generic feedback 
	To check that the feedback button exists and functions as expected on the Homepage

Background: 
	Given User has navigated to Usabilla website 
	And User is on the Usabilla Homepage 
	And Feedback button is present on the Homepage and user clicks it 
	And User chooses Generic feedback 
	
@tag1 
Scenario: As a user, he/she should be able to provide a compliment 
	Given User chooses an emoji 
	When User chooses to provide a compliment 
	And User must be able to share thoughts and details 
	And User should be able to share his recommondation ratings 
	Then User is ackonowledged for the feedback 