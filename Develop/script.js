// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Create a function with all possible characters
function generatePassword() {
  var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "`", "~", "-", "_", "=", "+", "[", "]", "{", "}", "\\", "|", ";", ":", ",", ".", "/", "<", ">", "?", "'"];
}

// Ask User to specify a password length
var passwordLength = prompt ("Please choose a password length between 8 and 128 characters.")

if (length < 8 || length > 128) {
  alert("You must choose a password length between 8 and 128 characters!");
}

// Prompting User for password criteria





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
