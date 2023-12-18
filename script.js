// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// array of all available characters
let allCharacters = [upperCasedCharacters, lowerCasedCharacters, numericCharacters, specialCharacters];

// console.log (allCharacters)


// Function to prompt user for password options
function chooseLength () {
//prompt for password length
let passLength = prompt (`How many characters do you want in your password?`);
// prompted data string parsed into number
passLength = parseInt (passLength);
// check if password length is 8 and 128
  // if out of lenght range, message use: must be between 8 and 24
if (passLength < 8 || passLength > 128) {
  alert (`Invalid password length. Please choose a number between 8 and 128`);
  // return out of function or call function again
}
}


let upperCase = confirm (`Do you want to use uppercase letters in your password?`);
let lowerCase = confirm (`Do you want to use lowercase letters in your password?`);
let numbericChar = confirm (`Do you want to use numbers in your password?`);
let specialChar = confirm (`Do you want to use special characters in your password?`);

// validate that at least one character type has been selected
  // if all false, message user: must choose at least 1
if (!(upperCase || lowerCase || numbericChar || specialChar)) {
  alert (`Please select at least one character type`);
  // return out of function or call function again
}


// Confirm which character sets to use


// Once they select a character set:
  // Generate a random character for each selected character set
  // Either push selected character sets to a mega-array of all selected characters
  // OR you can keep the arrays separate and generate a random number to select the array and another to select the index
  
  // Once character sets are selected, move on to generating random characters


// function getPasswordOptions () {
//   let selectUppercase = false;
//   let selectLowerrcase = false;
//   let selectNumber = false;
//   let selectSpecialCharacter = false;
//   let length = parseInt (prompt (`How many characters does your password have?`));
//   if (length < 8 || length > 128) {
//     alert (`Please choose a number between 8 and 128`)
//   }
// }


// Function for getting a random element from an array
function getRandom(arr) {

}

// Function to generate password with user input
function generatePassword() {
  getPasswordOptions
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword)