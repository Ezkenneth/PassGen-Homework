//Creating Arrays for characters used to makeup password 

// Numeric Array 
var numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Lowercase Array

var lowerArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

// Uppercase Array 

var upperArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

// Special Keys array

var specArray = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '[', '{', '}', ']', ':', ':', '"', ',', '.', '<', '>', '/']

// User prompts for password choices

function passChoicesPrompts() {

  var passLength = parseInt(

  prompt("Input password character count"));

  if (passLength == isNaN) {
    alert('Please enter a numerical Value ');
    return;
  }
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






// var index = 0

// function passGenChars(chars) {
//   var randomNum = Math.floor(Math.random() * (chars.length - 1));

//   console.log(chars[randomNum]);
//   return chars[randomNum];
// }
