// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
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
// let allCharacters = [upperCasedCharacters, lowerCasedCharacters, numericCharacters, specialCharacters];

// console.log (allCharacters)


// Function to prompt user for password options
function getPasswordOptions () {
  //prompt for password length
  let passLength = prompt (`How many characters do you want in your password?`);
  // prompted data string parsed into number
  passLength = parseInt (passLength);
  // check if password length is 8 and 128
    // if out of lenght range, alter user (must be between 8 and 24) and return out of function
  if (passLength < 8 || passLength > 128) {
    alert (`Invalid password length. Please choose a number between 8 and 128`);
    return;
  }
  console.log (passLength)
  
  let selectUppercase = confirm (`Do you want to use uppercase letters in your password?`);
  let selectLowercase = confirm (`Do you want to use lowercase letters in your password?`);
  let selectNumericChar = confirm (`Do you want to use numbers in your password?`);
  let selectSpecialChar = confirm (`Do you want to use special characters in your password?`);

    var characterArray = []

  if (selectUppercase) {
    characterArray = characterArray.concat (upperCasedCharacters)
  }
  if (selectLowercase) {
    characterArray = characterArray.concat (lowerCasedCharacters)
  }
  if (selectNumericChar) {
    characterArray = characterArray.concat (numericCharacters)
  }
  if (selectSpecialChar) {
    characterArray = characterArray.concat (specialCharacters)
  }

  // validate that at least one character type has been selected
  if (characterArray.length === 0) {
    alert (`Please select at least one character type`);
    return;
  }

   console.log (characterArray)

   let randomCharacter = getRandom(characterArray, passLength)
  console.log (randomCharacter)
   return randomCharacter
}


// Function for getting a random element from an array, once a character set has been selected
function getRandom(arr, passLength) {
  console.log (passLength)

  var password = ""

  for (var i = 0; i < passLength; i++) {
    var index = Math.floor (Math.random () * arr.length)
    var character = arr[index]
    console.log (character)
    password = password.concat (character)
    console.log (password)
  }
  return password
}


// Function to generate password with user input
function generatePassword() {
  return getPasswordOptions()
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