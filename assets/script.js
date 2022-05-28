// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Create arrays with all possible characters

var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "`", "~", "-", "_", "=", "+", "[", "]", "{", "}", "\\", "|", ";", ":", ",", ".", "/", "<", ">", "?", "'"];

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Ask User to specify a password length and prompting user for password criteria
function generatePassword() {
var passwordLength = prompt("Please choose a password length between 8 and 128 characters.");
if (passwordLength < 8 || passwordLength > 128) {
  window.alert("You must choose a password length between 8 and 128 characters!")
  return generatePassword();
}

// Prompting User for password criteria

var uppercasePrompt = confirm("If you want uppercase characters in your password click 'Ok' for Yes and 'Cancel' for No.");
if  (uppercasePrompt) {
  window.alert("You have chosen to include uppercase characters.");
} 
else  {
  window.alert("You have chosen not to include uppercase characters.")
}

var lowercasePrompt = confirm("If you want lowercase characters in your password click 'Ok' for Yes and 'Cancel' for No.")
if (lowercasePrompt)  {
  alert("You have chosen to include lowercase characters.")
}
else {
  alert("You have chosen not to include lowercase characters.")
}

var numberPrompt = confirm("If you want numbers in your password click 'Ok' for Yes and 'Cancel' for No.")
if (numberPrompt) {
  alert("You have chosen to include numbers.")
}
else  {
  alert("You have chosen not to include numbers.")
}

var specialPrompt = confirm("If you want special characters in your password click 'Ok' for Yes and 'Cancel' for No.")
if (specialPrompt)  {
  alert("You have chosen to include special characters.")
}
else {
  alert("You have chosen not to include special characters.")
}

// Concatenation of character variables
// Variable with users input

var renderedPassword = [];

if (uppercasePrompt)  {
  renderedPassword = renderedPassword.concat(uppercase)
}
if (lowercasePrompt)  {
  renderedPassword = renderedPassword.concat(lowercase)
}
if (numberPrompt) {
  renderedPassword = renderedPassword.concat(number)
}
if (specialPrompt)  {
  renderedPassword = renderedPassword.concat(special)
}

// Generating password
var endPassword = [];  
for(var i = 0; i < passwordLength; i++)  {

  endPassword.push(renderedPassword[Math.floor(Math.random() * renderedPassword.length)]); 
}

return endPassword.join("");
};


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


