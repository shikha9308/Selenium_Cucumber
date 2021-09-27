package stepDefs;

import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class LoginSteps {
	
	WebDriver driver = BaseClass.driver;
	
	@Given("^User has launched swaglab application$")
    public void user_has_launched_swaglab_application() throws Throwable {
        
		System.out.println("inside given");
		
    }

    @When("^User enters username password and click on login button$")
    public void user_enters_username_password_and_click_on_login_button() throws Throwable {
    	
    	System.out.println("inside when");
    	
    	WebElement Uname = driver.findElement(By.id("user-name"));
    	WebElement Passowrd = driver.findElement(By.id("password"));
    	WebElement LoginButton = driver.findElement(By.id("login-button"));
    	
    	Uname.sendKeys("standard_user");
    	Passowrd.sendKeys("secret_sauce");
    	LoginButton.click();
    	
    	
    }

    @Then("^User should be able to see the home page$")
    public void user_should_be_able_to_see_the_home_page() throws Throwable {
       
    	System.out.println("inside then");
    	
    	WebElement Header = driver.findElement(By.xpath("//span[text()='Products']"));
    	
    	Assert.assertTrue(Header.isDisplayed());
    	
    }
    
    @When("^User enters username \"([^\"]*)\" password \"([^\"]*)\" and click on login button$")
    public void user_enters_username_something_password_something_and_click_on_login_button(String username, String password) throws Throwable {
        
    	WebElement Uname = driver.findElement(By.id("user-name"));
    	WebElement Passowrd = driver.findElement(By.id("password"));
    	WebElement LoginButton = driver.findElement(By.id("login-button"));
    	
    	Uname.sendKeys(username);
    	Passowrd.sendKeys(password);
    	LoginButton.click();
    }
    
    @Then("^User should be getting the error$")
    public void User_should_be_getting_the_error() throws Throwable {
       
    
    	
    	WebElement Error = driver.findElement(By.xpath("//*[@class='error-message-container error']/h3"));
    	
    	Assert.assertTrue(Error.isDisplayed());
    	
    }



}
