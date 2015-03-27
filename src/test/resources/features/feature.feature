Feature: Create New User

  Background:
    Given I am in users page

# tagged hooks
  @vodqa
  Scenario: creating new user
    Then I click on new user link
    And enter user first name as "Benazeer5"
    And enter user last name as "khan5"
    And enter user email id as "benni5@gmail.com"
    And enter user username as "benni5"
    And enter user password as "benni1523"
    And enter user phone as "12345677891"
    And enter user address as "TW Gurgaon"
    And enter user postcode as "122002"
    And enter user year of dob as "1991"
    And enter user month of dob as "March"
    And enter user day of dob as "21"
    And enter user sex as "Female"
    And enter user comments as "attending vodqa"
    And click create user button
    Then verify user is on confirm page

  @vodqa
  Scenario: Second User creation
    When I click on new user link
    And I enter user details as:
      | First name | Last name | Email address   | Username | Password | Phone      | Address     | Postal Code | DobYear | DobMonth | DobDay | Sex    | Comments    |
      | Sonal12    | Mandhyan1 | sonal21@gmail.com | sonal12    | password12 | 1234567890 | Sushant Lok | 122002      | 1991    | jan      | 21     | Female | Test User 2 |
    And click create user button
    Then verify user is on confirm page

# @vodqa
#  Scenario Outline: Third new user
#    Then I click on new user link
#    And enter user first name as <First name>
#    And enter user last name as <Last name>
#    And enter user email id as <Email address>
#    And enter user username as <Username>
#    And enter user password as <Password>
#    And enter user phone as <Phone>
#    And enter user address as <Address>
#    And enter user postcode as <Postal code>
#    And enter user year of dob as <DobYear>
#    And enter user month of dob as <DobMonth>
#    And enter user day of dob as <DobDay>
#    And enter user sex as <Sex>
#    And enter user comments as <Comments>
#    And click create user button
#    Then verify user is on confirm page
#
#    Examples:
#  | First name | Last name | Email address   | Username | Password | Phone      | Address     | Postal code | DobYear | DobMonth | DobDay | Sex    | Comments    |
#  | Sonal12    | Mandhyan1 | sonal21@gmail.com | sonal12    | password12 | 1234567890 | Sushant Lok | 122002      | 1991    | jan      | 21     | Female | Test User 2 |
