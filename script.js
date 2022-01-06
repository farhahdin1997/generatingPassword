// Assignment Code
var generateBtn = document.querySelector("#generate");
//Declaring variables 
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

//Converting variable to uppercase
var blankU= [];
var convertToUpper = function (x) {
  return x.convertToUpperCase();
};
upperCase = lowerCase.map(ConvertToUpper);

//Generating password function
function generatePassword() {
    // Ask for the users Input if the user doesn't input it will show an alert message
    passwordLength = prompt("How many characters would you like your password? Choose between 8 and 128");
    console.log("Password length " + passwordLength);
    
    if(!passwordLength) {
      alert("Required value");
    }
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
