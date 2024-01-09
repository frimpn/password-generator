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

// Function to prompt user for password options
function getPasswordOptions() {

  let passwordLength = prompt('What number of characters do you want your generated password to have')
  
  
  if(passwordLength < 8 || passwordLength > 128){
    alert('Please enter number between 8 and 128')
  }else{
    return null
  }



  let includeSpecialCharacters = confirm('Would you like special characters')
  let includeNumericCharacters = confirm('Would you like numeric characters')
  let includeLowercaseCharacters = confirm('would you like lowercase characters')
  let includeUpperCaseCharacters = confirm('would you like uppercase characters')

  if(includeSpecialCharacters){
  }else if(includeNumericCharacters){    
  }else if(includeLowercaseCharacters){    
  }else if(includeUpperCaseCharacters){
  }else{
    alert('please select one character type')
  }

  let options = {
    passwordLength: passwordLength,
    includeNumericCharacters: includeNumericCharacters,
    includeLowercaseCharacters: includeLowercaseCharacters,
    includeUpperCaseCharacters: includeUpperCaseCharacters,
    includeSpecialCharacters: includeSpecialCharacters
  }

  return options

}

// Function for getting a random element from an array
function getRandom(arr) {

  let random = Math.floor(Math.random() * arr.length)
  let randomElement = arr[random]

  return randomElement

}

// Function to generate password with user input
function generatePassword() {
let options = getPasswordOptions()
let combine = []
let password = ''


if(options.includeSpecialCharacters){
  
  for(let i of specialCharacters){
    combine.push(i)
    
  }
  
}

if(options.includeNumericCharacters){
  for(let  i of numericCharacters){
    combine.push(i)
  }
}

if(options.includeUpperCaseCharacters){
  for(let i of upperCasedCharacters){
    combine.push(i)
  }
}

if(options.includeLowercaseCharacters){
  for(let i of lowerCasedCharacters){
    combine.push(i)
  }
}

for(let i = 0; i < options.passwordLength; i++){
  password += getRandom(combine)
}

return password



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