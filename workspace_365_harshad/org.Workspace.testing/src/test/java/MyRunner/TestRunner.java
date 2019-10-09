package MyRunner;


import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
 features = "features"
  ,glue={"stepDefinitions"}
 , tags= {"@TestCase1"}
 ,plugin = { "pretty", "html:target/cucumber-reports" }
 
 )

public class TestRunner {

	
	
	
}
