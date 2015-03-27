package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class ConfirmUserPageObject {

    WebDriver driver;

    public ConfirmUserPageObject(WebDriver driver) {
        this.driver = driver;

        PageFactory.initElements(driver, this);
    }

    @FindBy(id = "notice")
    WebElement successMessage;

    public String getSuccessMessage() {
        return successMessage.getText();
    }

}