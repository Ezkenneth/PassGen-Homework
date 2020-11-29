//Creating Arrays for characters used to makeup password 

// Numeric Array 
var numArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Lowercase Array

var lowerArray = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z' ];

// Uppercase Array 

var upperArray = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ];

// Special Keys array

var specArray = [ '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-', '+', '=', '[', '{', '}', ']', ':', ':', '"', ',', '.', '<', '>', '/' ];

// User prompts for password choices

function passChoicesPrompts() {

  // Converts user input to Numerical value 
  var length = parseInt(

    prompt("Input password character count"));

  // Checks if variable entered by user is a number and alerts if it isnt   
  if (isNaN(length) === true) {
    alert('Please enter a numerical Value');
    return;
  }

  // Checks if Password length is above 8 and alerts if it is 
  if (length < 8) {
    alert('Password too short - Must be min 8 characters');
    return;
  }

  // Checks if length is above 128 and alerts if it is 
  if (length > 128) {
    alert('Password too long - Must be max 128 characters');
    return;
  }

// Upper case inclusion 
  var upperCaseCheck = confirm(
    'Include Uppercase characters?'
  );

  // Lower case inclusion
  var lowerCaseCheck = confirm(
    'Include Lowercase characters?'
  );
 
  // Numerical character inclusions
  var numericCheck = confirm(
    'Includes Numeric characters?'
  );

  // Special character inclusion
  var specCharCheck = confirm(
    'Includes Special Characters?'
  );


  // Checks if no character specification is given and alerts user 
  if (
    upperCaseCheck === false && lowerCaseCheck === false && numericCheck === false && specCharCheck === false) {
    alert('Must include one character class');
    return;
  }


  // Logging User input with object - allows to pull without array repitition
  var userChoices = {
    length: length,
    lowerCaseCheck: lowerCaseCheck,
    upperCaseCheck: upperCaseCheck,
    numericCheck: numericCheck,
    specCharCheck: specCharCheck
  };

  return userChoices;
}

// Creating a function to pulling random elements from set arrays 

function randPick(arr) {
  //Random element calculation
  var randPos = Math.floor(Math.random() * arr.length);
  // Sets and returns random element from the array 
  var randChar = arr[randPos];

  return randChar;
}

//Creating the random password 

function passGenCreate() {

  // logging prompts function for ease of access
  var choices = passChoicesPrompts();

// Creating variables to store values for randomization 
  var result = [];

  var passOptions = [];

  var chosenOptions = [];


  // conditionals from choices 

 // If lowercase array seclected - add to list of password options array to choose from 
  if (choices.lowerCaseCheck) {
    passOptions = passOptions.concat(lowerArray);
    chosenOptions.push(randPick(lowerArray));
  }

  // If uppercase array seclected - add to list of password options array to choose from 
  if (choices.upperCaseCheck) {
    passOptions = passOptions.concat(upperArray);
    chosenOptions.push(randPick(upperArray));
  }

  // If special char array seclected - add to list of password options array to choose from 
  if (choices.specCharCheck) {
    passOptions = passOptions.concat(specArray);
    chosenOptions.push(randPick(specArray));
  }

  // If numerical array seclected - add to list of password options array to choose from 
  if (choices.numericCheck) {
    passOptions = passOptions.concat(numArray);
    chosenOptions.push(randPick(numArray));
  }

  // Creates a loop which runs the function to match the length of the user input 
  for (var i = 0; i < choices.length; i++) {
    var passOption = randPick(passOptions);

    result.push(passOption);
  }

  // Creates a loop to include the user choices within the randomized password 
  for (var i = 0; i < chosenOptions.length; i++) {
    result[i] = chosenOptions[i];
  }

  // Puts together random characters as a random password 
  return result.join('');
}


// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = passGenCreate();
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
