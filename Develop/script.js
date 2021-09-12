// Assignment code here
var lengthPrompt = function() {
  var length = "";

  while (length <8 || length >128) {
    length = window.prompt("How many characters would you like your password to contain? Please choose a number between 8 and 128.")
  }

  console.log(length);
  return length;
};

var generatePassword = function() {
  var length = lengthPrompt();
  
  var passSChar = window.confirm("Click OK to confirm including special characters.");
  var passNum = window.confirm("Click OK to confirm including numeric characters.");
  var passLowerC = window.confirm("Click OK to confirm including lowercase characters.");
  var passUpperC = window.confirm("Click OK to confirm including uppercase characters.");
  var character = "";

  if (passSChar == true) {
    character += "+-!@#$%^&()?><";
    console.log("passSChar is True");
    console.log(passSChar)
  };
  if (passNum == true) {
    character += "0123456789";
    console.log("passNum is True");
  };
  if (passLowerC == true) {
    character += "abcdefghijklmnopqrstuvwxyz";
    console.log("passLowerC is True");
  };
  if (passUpperC == true) {
    character += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    console.log("passUpperC is True");
  };

  var result = "";
  for (var i = 0; i < length; i++) {
    result += character.charAt(
      Math.floor(Math.random() * character.length)
    );
  }
  return result;
};

// var generatePassword = function() {
//   var length = window.prompt("How many characters would you like your password to contain?");
//   var charset = "abcdefghijklmnopqrstuvwxyz";
//   var retVal = "";
//   for (var i = 0, n = charset.length; i < length; ++i) {
//     retVal += charset.charAt(Math.floor(Math.random() * n ));
//   }
//   return retVal;
// }

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
