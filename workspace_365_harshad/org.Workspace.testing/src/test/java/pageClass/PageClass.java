package pageClass;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

public class PageClass {
	public static WebDriver driver;
	static Actions actions;

	public void openUrl() {
		System.setProperty("webdriver.chrome.driver", "browser_drivers/chromedriver.exe");
		driver = new ChromeDriver();
		actions = new Actions(driver);
		driver.get("https://staging.workspace365.net/qachallenge");
	}

	public static WebElement nameAndPasswodElement() {

		WebElement element=driver.findElement(By.xpath(".//div[@class='placeholderContainer']"));
		return element;
	}

	public static WebElement submitElement() {

		WebElement element=driver.findElement(By.xpath(".//input[@type='submit']"));
		return element;
	}

	public static WebElement popUpElement() {
		WebElement element=driver.findElement(By.xpath(".//input[@id='idBtn_Back']"));
		return element;
	}

	public static WebElement clickGroupsElement() {
		WebElement element=driver.findElement(By.xpath("//li[@data-action-id='Groups']/a[@class='dropdown-toggle hoverable' and @data-toggle='dropdown']"));
		return element;
	}

	public static WebElement clickSaveElement() {
		WebElement element=driver.findElement(By.xpath("//li[@data-action-id='Save']/a"));
		return element;
	}

	public static WebElement clickNewPersonalGroupElement() {
		WebElement element=driver.findElement(By.xpath("//a[contains(text(),'New personal group')]"));
		return element;
	}

	public static WebElement clickAddGroupElement() {
		WebElement element=driver.findElement(By.xpath("//h3[contains(text(),'New group')]"));
		return element;
	}

	public static WebElement enterPersonalGroupTitleElement() {
		WebElement element=driver.findElement(By.xpath("//h3[contains(text(),'New group')]/following-sibling::input"));
		return element;
	}
	public static WebElement editWorkspaceElement() {
		WebElement element=driver.findElement(By.xpath("//li[@data-action-id='EditWorkspace']/a"));
		return element;
	}
	public static WebElement addTilesElement() {
		WebElement element=driver.findElement(By.xpath("//h3[contains(text(),'TestAutomationDemo')]//following-sibling::div[@title='Add tiles']"));
		return element;
	}
	public static WebElement selectFacebookElement() {
		WebElement element=driver.findElement(By.xpath("//div[@class='app-name' and contains(text(),'Facebook')]"));
		return element;
	}
	public static WebElement selectFlowElement() {
		WebElement element=driver.findElement(By.xpath("//div[@class='app-name' and contains(text(),'Flow')]"));
		return element;
	}
	public static WebElement addToWorkspaceElement() {
		WebElement element=driver.findElement(By.xpath("//button[@name='addToWorkspace' and contains(text(),'Add to workspace')]"));
		return element;
	}

	public static void enterUserName(String input) {
		actions.moveToElement(nameAndPasswodElement());
		actions.click(); actions.sendKeys(input);
		actions.build().perform();

	}

	public static void enterPassword(String input) {
		actions.moveToElement(nameAndPasswodElement());
		actions.click(); actions.sendKeys(input);
		actions.build().perform();

	}

	public static void clickOnSubmit() {
		actions.moveToElement(submitElement());
		actions.click();
		actions.build().perform();

	}

	public static void clickOnNo() {
		actions.moveToElement(popUpElement());
		actions.click();
		actions.build().perform();

	}

	public static void clickGroupsDropDown() {

		clickGroupsElement().click();

	}



	public static void clickNewPersonalGroupLink() {

		clickNewPersonalGroupElement().click();

	}

	public static void clickAddGroupHeader() {
		clickAddGroupElement().click();

	}

	public static void clickSaveButton() {
		try {
			Thread.sleep(2000);
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		actions.moveToElement(clickSaveElement());
		actions.click();
		actions.build().perform();

	}

	public static void enterNewPersonalGroupTitle(String input) {
		enterPersonalGroupTitleElement().clear();
		enterPersonalGroupTitleElement().sendKeys(input);
		enterPersonalGroupTitleElement().sendKeys(Keys.ENTER);

	}
	public static void editWorkspace() {
		editWorkspaceElement().click();

	}
	public static void clickOnAddTiles() {
		addTilesElement().click();

	}
	public static void addTiles() throws InterruptedException {
		selectFacebookElement().click();
		Thread.sleep(3000);
		selectFlowElement().click();

	}
	public static void clickaddToWorkspaceButton() throws InterruptedException {
		Thread.sleep(8000);
		actions.moveToElement(addToWorkspaceElement());
		actions.click();
		actions.build().perform();

	}
	
	public static WebElement deleteGroupElement() {

		WebElement element=driver.findElement(By.xpath("//h3[contains(text(),'TestAutomationDemo')]//following-sibling::div[@title='Delete group']"));
		return element;
	}







}
