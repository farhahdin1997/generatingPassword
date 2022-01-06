// Assignment Code
var generateBtn = document.querySelector("#generate");
//Declaring Variables
var passLength;
var CLower;
var CUpper;
var CNumber;
var CSpecial;
var Choices;
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

// Converting to uppercase 
var blankU = [];
var toUpper = function (x) {
  return x.toUpperCase();
};
upperCase = lowerCase.map(toUpper);

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generating password function
function generatePassword() {
  // Ask for the user to input 
  passLength = prompt("How many characters would you like your password? Choose between 8 and 128");
  console.log("Password length " + passLength); 
  //Else if the user doesn't input a alert message will show
  if(!passLength) {
    alert("Required value");

  }
  //creating a length for the password and allowing users to input 
 else if (passLength < 8 || passLength > 128) {
    passLength = prompt("You must choose between 8 and 128");
    console.log("Password length " + passLength);}

//Generate prompts to allow users to choose if they want upper , lower ,special and numbers in the password
 else { 
    cLower = confirm("Will this contain lower case letters?");
    console.log("Lower case " + cLower);
    cUpper = confirm("Will this contain upper case letters?");
    console.log("Upper case " + cUpper);
    cNumber = confirm("Will this contain numbers?");
    console.log("Number " + cNumber);
    cSpecial = confirm("Will this contain special characters?");
    console.log("Special Character " + cSpecial);

  };

//If none of these options were selected an alert message will appear
  // No answer then
  if (!cLower && !cUpper && !cNumber && !cSpecial) {
    Choices = alert("You must choose a criteria");
  }

//Generating the password after selecting the prompts




  // Empty variable for the password lenght
  var passwordBlank = [];
  
  // Loop for random selection
  for (var i = 0; i < passLength; i++) {
    var allChoices = userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
    console.log(allChoices);
  }

  // Join and return the password 
  var password = passwordBlank.join("");
  console.log("Your Pasword is: " + password);
  return password;
  
}