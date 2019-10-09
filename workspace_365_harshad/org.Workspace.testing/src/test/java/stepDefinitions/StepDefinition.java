package stepDefinitions;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.*;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageClass.PageClass;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.event.KeyEvent;
import java.util.List;
import java.util.Set;

import org.junit.Assert;

public class StepDefinition {

	WebDriver driver;

	Actions actions;
	PageClass pageclass=new PageClass();
	
	@Given("^User has navigated to workspace(\\d+)$")
	public void user_has_navigated_to_workspace(int arg1) throws Throwable {
		pageclass.openUrl();
		
		/*
		 * System.setProperty("webdriver.chrome.driver",
		 * "browser_drivers/chromedriver.exe"); driver = new ChromeDriver(); actions =
		 * new Actions(driver);
		 * driver.get("https://staging.workspace365.net/qachallenge");
		 */
		//driver.manage().window().maximize();
	}

	@Given("^enter username \"([^\"]*)\"$")
	public void enter_username(String arg1) throws Throwable {
		
		PageClass.enterUserName(arg1);
		System.out.println("user name");
		Thread.sleep(5000);
	   
	}
	
	
	
	@Then("^click on next button$")
	public void click_on_next_button() throws Throwable {
		PageClass.clickOnSubmit();
		Thread.sleep(5000);
	}

		
	@Then("^enter the password \"([^\"]*)\"$")
	public void enter_the_password(String arg1) throws Throwable {
		PageClass.enterPassword(arg1);
		System.out.println("pwd");
	}
	
	@Then("^click on submit button$")
	public void click_on_submit_button() throws Throwable {
		PageClass.clickOnSubmit();
		Thread.sleep(5000);
	}
	
	@Then("^click save button$")
	public void click_save_button() throws Throwable {
	  PageClass.clickSaveButton();
	}
	
	@Then("^click on no$")
	public void click_on_no() throws Throwable {
		PageClass.clickOnNo();
	}
	
	@Then("^click on Groups drop down$")
	public void click_on_Groups_drop_down() throws Throwable {
		PageClass.clickGroupsDropDown();
	}
	
	@Then("^click on new personal group link$")
	public void click_on_new_personal_group_link() throws Throwable {
		PageClass.clickNewPersonalGroupLink();
	}
	
	@Then("^click on Add group header$")
	public void click_on_Add_group_header() throws Throwable {
	    PageClass.clickAddGroupHeader();
	}
	
	
	@Given("^enter new personal group title \"([^\"]*)\"$")
	public void enter_new_personal_group_title(String arg1) throws Throwable {
	   PageClass.enterNewPersonalGroupTitle(arg1);
	}

	@Given("^click on edit workspace$")
	public void click_on_edit_workspace() throws Throwable {
		Thread.sleep(3000);
		PageClass.editWorkspace();
	}

	@Given("^click on add tiles$")
	public void click_on_add_tiles() throws Throwable {
		Thread.sleep(3000);
	    PageClass.clickOnAddTiles();
	}

	@Given("^add applications$")
	public void add_applications() throws Throwable {
		Thread.sleep(3000);
	   PageClass.addTiles();
	}

	@Given("^click on add workspace button$")
	public void click_on_add_workspace_button() throws Throwable {
	    PageClass.clickaddToWorkspaceButton();
	}
	
	@Given("^click on delete Group$")
	public void click_on_delete_button() throws Throwable {
	    PageClass.deleteGroupElement();
	}
	
	@Given("^close browser$")
	public void close_browser() throws Throwable {
		Thread.sleep(5000);
	    driver.close();
	    driver.quit();
	}
	
	
		
	}


