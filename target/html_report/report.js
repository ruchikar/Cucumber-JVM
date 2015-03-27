$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/feature.feature");
formatter.feature({
  "id": "simple-feature-file",
  "description": "",
  "name": "simple feature file",
  "keyword": "Feature",
  "line": 1
});
formatter.before({
  "duration": 1662269000,
  "status": "passed"
});
formatter.scenario({
  "id": "simple-feature-file;creating-new-user",
  "tags": [
    {
      "name": "@Smoke",
      "line": 3
    }
  ],
  "description": "",
  "name": "creating new user",
  "keyword": "Scenario",
  "line": 4,
  "type": "scenario"
});
formatter.step({
  "name": "I am in users page",
  "keyword": "Given ",
  "line": 5
});
formatter.step({
  "name": "I click on new user link",
  "keyword": "Then ",
  "line": 6
});
formatter.step({
  "name": "enter user first name as \"Benazeer5\"",
  "keyword": "And ",
  "line": 7
});
formatter.step({
  "name": "enter user last name as \"khan5\"",
  "keyword": "And ",
  "line": 8
});
formatter.step({
  "name": "enter user email id as \"benni5@gmail.com\"",
  "keyword": "And ",
  "line": 9
});
formatter.step({
  "name": "enter user username as \"benni51\"",
  "keyword": "And ",
  "line": 10
});
formatter.step({
  "name": "enter user password as \"benni1523\"",
  "keyword": "And ",
  "line": 11
});
formatter.step({
  "name": "enter user phone as \"12345677891\"",
  "keyword": "And ",
  "line": 12
});
formatter.step({
  "name": "enter user address as \"TW Gurgaon\"",
  "keyword": "And ",
  "line": 13
});
formatter.step({
  "name": "enter user postcode as \"122002\"",
  "keyword": "And ",
  "line": 14
});
formatter.step({
  "name": "enter user year of dob as \"1991\"",
  "keyword": "And ",
  "line": 15
});
formatter.step({
  "name": "enter user month of dob as \"March\"",
  "keyword": "And ",
  "line": 16
});
formatter.step({
  "name": "enter user day of dob as \"21\"",
  "keyword": "And ",
  "line": 17
});
formatter.step({
  "name": "enter user sex as \"Female\"",
  "keyword": "And ",
  "line": 18
});
formatter.step({
  "name": "enter user comments as \"attending vodqa\"",
  "keyword": "And ",
  "line": 19
});
formatter.step({
  "name": "click create user button",
  "keyword": "And ",
  "line": 20
});
formatter.step({
  "name": "verify user is on confirm page",
  "keyword": "Then ",
  "line": 21
});
formatter.match({
  "location": "MyStepdefs.I_am_in_users_page()"
});
formatter.result({
  "duration": 1434812000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.I_click_on_new_user_link()"
});
formatter.result({
  "duration": 385029000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Benazeer5",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.enter_user_first_name_as(String)"
});
formatter.result({
  "duration": 74880000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "khan5",
      "offset": 25
    }
  ],
  "location": "MyStepdefs.enter_user_last_name_as(String)"
});
formatter.result({
  "duration": 92789000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "benni5@gmail.com",
      "offset": 24
    }
  ],
  "location": "MyStepdefs.enter_user_email_id_as(String)"
});
formatter.result({
  "duration": 78352000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "benni51",
      "offset": 24
    }
  ],
  "location": "MyStepdefs.enter_user_username_as(String)"
});
formatter.result({
  "duration": 71119000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "benni1523",
      "offset": 24
    }
  ],
  "location": "MyStepdefs.enter_user_password_as(String)"
});
formatter.result({
  "duration": 82885000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "12345677891",
      "offset": 21
    }
  ],
  "location": "MyStepdefs.enter_user_phone_as(String)"
});
formatter.result({
  "duration": 82858000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "TW Gurgaon",
      "offset": 23
    }
  ],
  "location": "MyStepdefs.enter_user_address_as(String)"
});
formatter.result({
  "duration": 95033000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "122002",
      "offset": 24
    }
  ],
  "location": "MyStepdefs.enter_user_postcode_as(String)"
});
formatter.result({
  "duration": 97165000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1991",
      "offset": 27
    }
  ],
  "location": "MyStepdefs.enter_user_year_of_dob_as(String)"
});
formatter.result({
  "duration": 83115000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "March",
      "offset": 28
    }
  ],
  "location": "MyStepdefs.enter_user_month_of_dob_as(String)"
});
formatter.result({
  "duration": 78559000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "21",
      "offset": 26
    }
  ],
  "location": "MyStepdefs.enter_user_day_of_dob_as(String)"
});
formatter.result({
  "duration": 83566000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Female",
      "offset": 19
    }
  ],
  "location": "MyStepdefs.enter_user_sex_as(String)"
});
formatter.result({
  "duration": 82124000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "attending vodqa",
      "offset": 24
    }
  ],
  "location": "MyStepdefs.enter_user_comments_as(String)"
});
formatter.result({
  "duration": 112008000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.click_create_user_button()"
});
formatter.result({
  "duration": 338299000,
  "status": "passed"
});
formatter.match({
  "location": "MyStepdefs.verify_user_is_on_confirm_page()"
});
formatter.result({
  "duration": 33118000,
  "status": "failed",
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"notice\"}\nCommand duration or timeout: 33 milliseconds\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8\u0027, time: \u00272015-02-26 23:59:50\u0027\nSystem info: host: \u0027Ruchika-Mac.local\u0027, ip: \u002710.133.22.183\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.5\u0027, java.version: \u00271.6.0_65\u0027\n*** Element info: {Using\u003did, value\u003dnotice}\nSession ID: 5d2e5dd8-1f0e-f745-a3fc-273950b984e2\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities [{platform\u003dMAC, acceptSslCerts\u003dtrue, javascriptEnabled\u003dtrue, browserName\u003dfirefox, rotatable\u003dfalse, locationContextEnabled\u003dtrue, version\u003d26.0, cssSelectorsEnabled\u003dtrue, databaseEnabled\u003dtrue, handlesAlerts\u003dtrue, browserConnectionEnabled\u003dtrue, nativeEvents\u003dfalse, webStorageEnabled\u003dtrue, applicationCacheEnabled\u003dtrue, takesScreenshot\u003dtrue}]\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:39)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:27)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:513)\n\tat org.openqa.selenium.remote.ErrorHandler.createThrowable(ErrorHandler.java:204)\n\tat org.openqa.selenium.remote.ErrorHandler.throwIfResponseFailed(ErrorHandler.java:156)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:599)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:352)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:393)\n\tat org.openqa.selenium.By$ById.findElement(By.java:214)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:344)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:59)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:37)\n\tat com.sun.proxy.$Proxy10.getText(Unknown Source)\n\tat pages.ConfirmUserPageObject.getSuccessMessage(ConfirmUserPageObject.java:22)\n\tat steps.MyStepdefs.verify_user_is_on_confirm_page(MyStepdefs.java:133)\n\tat ✽.Then verify user is on confirm page(features/feature.feature:21)\nCaused by: org.openqa.selenium.NoSuchElementException: Unable to locate element: {\"method\":\"id\",\"selector\":\"notice\"}\nFor documentation on this error, please visit: http://seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00272.45.0\u0027, revision: \u00275017cb8\u0027, time: \u00272015-02-26 23:59:50\u0027\nSystem info: host: \u0027Ruchika-Mac.local\u0027, ip: \u002710.133.22.183\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.9.5\u0027, java.version: \u00271.6.0_65\u0027\nDriver info: driver.version: unknown\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElementInternal_(file:///var/folders/jw/cky6km61361bq7wfl8cg6ff00000gp/T/anonymous5588268361153512262webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10271)\n\tat \u003canonymous class\u003e.FirefoxDriver.prototype.findElement(file:///var/folders/jw/cky6km61361bq7wfl8cg6ff00000gp/T/anonymous5588268361153512262webdriver-profile/extensions/fxdriver@googlecode.com/components/driver-component.js:10280)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_/h(file:///var/folders/jw/cky6km61361bq7wfl8cg6ff00000gp/T/anonymous5588268361153512262webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12274)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.executeInternal_(file:///var/folders/jw/cky6km61361bq7wfl8cg6ff00000gp/T/anonymous5588268361153512262webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12279)\n\tat \u003canonymous class\u003e.DelayedCommand.prototype.execute/\u003c(file:///var/folders/jw/cky6km61361bq7wfl8cg6ff00000gp/T/anonymous5588268361153512262webdriver-profile/extensions/fxdriver@googlecode.com/components/command-processor.js:12221)\n"
});
formatter.after({
  "duration": 102961000,
  "status": "passed"
});
});