package steps;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import pages.ConfirmUserPageObject;
import pages.HomePageObject;
import pages.NewUserPageObject;

import java.util.List;


/**
 * Created by ruchikarawat on 3/26/15.
 */
public class MyStepdefs {

    WebDriver driver;
    String url;

//scenario hooks
    @Before("@vodqa")
    public void beforeScenario() {
        driver=new FirefoxDriver();
        url = "http://bdt-registration.herokuapp.com/users";
    }

    @Given("^I am in users page$")
    public void I_am_in_users_page() throws Throwable {
        driver.get(url);
    }

    @Then("^I click on new user link$")
    public NewUserPageObject I_click_on_new_user_link() throws Throwable {

        HomePageObject homePageObject = new HomePageObject(driver);
        homePageObject.clickOnNewUserLink();
        return new NewUserPageObject(driver);
    }

    @And("^enter user first name as \"([^\"]*)\"$")
    public void enter_user_first_name_as(String firstName) throws Throwable {
        NewUserPageObject newUserPageObject = new NewUserPageObject(driver);
        newUserPageObject.setFirstName(firstName);
    }

    @And("^enter user last name as \"([^\"]*)\"$")
    public void enter_user_last_name_as(String lastName) throws Throwable {
        NewUserPageObject newUserPageObject = new NewUserPageObject(driver);
        newUserPageObject.setLastName(lastName);
    }

    @And("^enter user email id as \"([^\"]*)\"$")
    public void enter_user_email_id_as(String email) throws Throwable {
        NewUserPageObject newUserPageObject = new NewUserPageObject(driver);
        newUserPageObject.setEmailAddress(email);
    }

    @And("^enter user username as \"([^\"]*)\"$")
    public void enter_user_username_as(String username) throws Throwable {
        NewUserPageObject newUserPageObject = new NewUserPageObject(driver);
        newUserPageObject.setUsername(username);
    }

    @And("^enter user password as \"([^\"]*)\"$")
    public void enter_user_password_as(String password) throws Throwable {
        NewUserPageObject newUserPageObject = new NewUserPageObject(driver);
        newUserPageObject.setPassword(password);
    }

    @And("^enter user phone as \"([^\"]*)\"$")
    public void enter_user_phone_as(String phone) throws Throwable {
        NewUserPageObject newUserPageObject = new NewUserPageObject(driver);
        newUserPageObject.setPhone(phone);
    }

    @And("^enter user address as \"([^\"]*)\"$")
    public void enter_user_address_as(String address) throws Throwable {
        NewUserPageObject newUserPageObject = new NewUserPageObject(driver);
        newUserPageObject.setAddress(address);
    }

    @And("^enter user postcode as \"([^\"]*)\"$")
    public void enter_user_postcode_as(String postcode) throws Throwable {
        NewUserPageObject newUserPageObject = new NewUserPageObject(driver);
        newUserPageObject.setPostcode(postcode);
    }

    @And("^enter user year of dob as \"([^\"]*)\"$")
    public void enter_user_year_of_dob_as(String dobyear) throws Throwable {
        NewUserPageObject newUserPageObject = new NewUserPageObject(driver);
        newUserPageObject.setDobYear(dobyear);
    }

    @And("^enter user month of dob as \"([^\"]*)\"$")
    public void enter_user_month_of_dob_as(String dobmonth) throws Throwable {
        NewUserPageObject newUserPageObject = new NewUserPageObject(driver);
        newUserPageObject.setDobMonth(dobmonth);
    }

    @And("^enter user day of dob as \"([^\"]*)\"$")
    public void enter_user_day_of_dob_as(String dobDay) throws Throwable {
        NewUserPageObject newUserPageObject = new NewUserPageObject(driver);
        newUserPageObject.setDobDay(dobDay);
    }

    @And("^enter user sex as \"([^\"]*)\"$")
    public void enter_user_sex_as(String sex) throws Throwable {
        NewUserPageObject newUserPageObject = new NewUserPageObject(driver);
        newUserPageObject.setSex(sex);
    }

    @And("^enter user comments as \"([^\"]*)\"$")
    public void enter_user_comments_as(String comments) throws Throwable {
        NewUserPageObject newUserPageObject = new NewUserPageObject(driver);
        newUserPageObject.setComments(comments);
    }

    @And("^click create user button$")
    public ConfirmUserPageObject click_create_user_button() throws Throwable {
        NewUserPageObject newUserPageObject = new NewUserPageObject(driver);
        newUserPageObject.clickCreateUserButton();
        return new ConfirmUserPageObject(driver);
    }

    @Then("^verify user is on confirm page$")
    public void verify_user_is_on_confirm_page() throws Throwable {
        ConfirmUserPageObject confirmUserPageObject = new ConfirmUserPageObject(driver);
        confirmUserPageObject.getSuccessMessage();
    }

    @And("^I enter user details as:$")
    public void enterNewUserDetails(DataTable userDetails) throws Throwable {
        NewUserPageObject newUserPageObject = new NewUserPageObject(driver);
        List<String> data = userDetails.raw().get(1);
        newUserPageObject.setFirstName(data.get(0));
        newUserPageObject.setLastName(data.get(1));
        newUserPageObject.setEmailAddress(data.get(2));
        newUserPageObject.setUsername(data.get(3));
        newUserPageObject.setPassword(data.get(4));
        newUserPageObject.setPhone(data.get(5));
        newUserPageObject.setAddress(data.get(6));
        newUserPageObject.setPostcode(data.get(7));
        newUserPageObject.setComments(data.get(8));
    }

//scenario hooks
    @After("@vodqa")
    public void afterScenario() {
        driver.close();
        driver.quit();
    }
}
