package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.pagefactory.AjaxElementLocatorFactory;

public class HomePageObject {

    private WebDriver driver;

    public HomePageObject (WebDriver driver) {

        this.driver = driver;
        PageFactory.initElements(driver, this);
    }


    @FindBy(linkText = "New User")
    WebElement newUserLink;

    public NewUserPageObject clickOnNewUserLink() {
        newUserLink.click();
        return new NewUserPageObject(driver);
    }
}