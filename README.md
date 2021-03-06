# Password Generator Starter Code

## **USER STORY**
<br>

**AS AN** employee with access to sensitive data

**I WANT** to randomly generate a password that meets certain criteria  

**SO THAT** I can create a strong password that provides greater security

<br>

### **ACCEPTANCE CRITERIA**
<br>

**GIVEN** I need a new, secure password

**WHEN** I click the button to generate a password<br>
**THEN** I am presented with a series of prompts for password criteria

**WHEN** prompted for password criteria<br>
**THEN** I select which criteria to include in the password

**WHEN** prompted for the length of the password<br>
**THEN** I choose a length of at least 8 characters and no more than 128 characters

**WHEN** asked for character types to include in the password<br>
**THEN** I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

**WHEN** I answer each prompt<br>
**THEN** my input should be validated and at least one character type should be selected

**WHEN** all prompts are answered<br>
**THEN** a password is generated that matches the selected criteria

**WHEN** the password is generated<br>
**THEN** the password is either displayed in an alert or written to the page

<br>

### **CONCEPTS TO KNOW**
* Organize logical operations into functions 
* work with iterating through alphanumeric characters
* render that data using JS
* create event listeners for things that happen on page
* and push to array
* random values (number 0-9 and characters a-z A-Z);

<br>

### Prompts
* How many characters would you like your password to contain?
* password length must be provided as a number
* Click OK to confirm including special characters
* Click OK to confirm including numeric characters
* Click OK to confirm including lowercase characters
* Click OK to confirm including uppercase characters