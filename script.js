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
    alert('Please enter a numerical Value');
    return;
  }

  if (passLength < 8) {
    alert('Password too short - Must be min 8 characters');
    return;
  }

  if (passLength > 128) {
    alert('Password too long - Must be max 128 characters');
    return;
  }

  var upperCaseCheck = confirm(
    'Include Uppercase characters?'
  );

  var lowerCaseCheck = confirm(
    'Include Lowercase characters?'
  );

  var numericCheck = confrim(
    'Includes Numeric characters?'
  );

  var specCharCheck = confirm(
    'Includes Special Characters?'
  );

  if ( 
    upperCaseCheck == "" && lowerCaseCheck == "" && numericCheck == "" && specCharCheck == "") {
      alert('Must include one character class');
      return;
    }
  

    // Logging User input with option - allows to pull without array repitition
    var userChoices = {
      length: passLength,
      lower: lowerCaseCheck,
      upper: upperCaseCheck,
      numeric: numericCheck,
      special: specCharCheck
    };

    return userChoices;
}

// Creating a function to pulling random elements from set arrays 

function randPick(r) {
  //Random element calculation
  var randPos = Math.floor(Math.random() * r.length);
  // Picks a random element from the array 
  var randChar = r[randPos];
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
