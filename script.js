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
var numericalCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCaseCharacters = [
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
var upperCaseCharacters = [
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

// Function to prompt user for password options
function getPasswordOptions() {
  //Password length variable
  let length = parseInt(
    prompt("Choose how many characters your password should be")
  )
  //Returns an error if anything but a number is entered
  if(isNaN(length) === true){
    alert(`Please enter a numerical value only`);
    return;
  }
  //Returns an error if value is lower than 10
  if(length < 10) {
    alert(`Passwords need to be 10 or more characters`);
    return;
  }
  //Returns an error if value is higher than 65
  if(length > 64) {
    alert(`Passwords must be 64 characters or less`)
  }
  //Asks user to confirm if they want special characters
  let hasSpecialCharacters = confirm(
    "Tap OK if you want your password to contain special characters"
  )
  //Asks user to confirm if they want numerical characters
  let hasNumericalCharacters = confirm(
    "Tap OK if you want your password to contain numbers"
  )
  //Asks user to confirm if they want lower case characters
  let hasLowerCaseCharacters = confirm(
    "Tap OK if you want your password to contain lower case letters"
  )
  //Asks user to confirm if they want upper case characters
  let hasUpperCaseCharacters = confirm(
    "Tap OK if you want your password to contain upper case letters"
  )
  //Returns an error if no characters have been chosen
  if(hasLowerCaseCharacters === false &&
    hasUpperCaseCharacters === false &&
    hasNumericalCharacters === false &&
    hasSpecialCharacters === false) {
      alert(`Passwords must contain at least one character type`);
      return;
  }

  //Defines the password's options - how long, which characters, etc
  let passwordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericalCharacters: hasNumericalCharacters,
    hasLowerCaseCharacters: hasLowerCaseCharacters,
    hasUpperCaseCharacters: hasUpperCaseCharacters
  }
  
  return passwordOptions;
}

// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length)
  let randomElement = arr[randomIndex];

  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  let result = []
  let possibleCharacters = []
  let guaranteedCharacters = []

  //If there are special characters, these are concatenated
  if(options.hasSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialCharacters);
    guaranteedCharacters.push(getRandom(specialCharacters))
  }

  //If there are lower case characters, these are concatenated
  if(options.hasLowerCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(lowerCaseCharacters);
    guaranteedCharacters.push(getRandom(lowerCaseCharacters))
  }

  //If there are upper case characters, these are concatenated
  if(options.hasUpperCaseCharacters) {
    possibleCharacters = possibleCharacters.concat(upperCaseCharacters);
    guaranteedCharacters.push(getRandom(upperCaseCharacters))
  }

  //If there are numerical characters, these are concatenated
  if(options.hasNumericalCharacters) {
    possibleCharacters = possibleCharacters.concat(numericalCharacters);
    guaranteedCharacters.push(getRandom(numericalCharacters))
  }

  //Grabs the generated string
  for(let index = 0; index < options.length; index++) {
    var generated = getRandom(possibleCharacters);
    result.push(generated);
  }
  //returns the results
  return result.join("")

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
generateBtn.addEventListener('click', writePassword);