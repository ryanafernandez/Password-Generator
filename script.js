// Assignment code here
/* Depending on the user input, the strings below will be appended to pool. */
var lowerChars = 'abcdefghijklmnopqrstuvwxyz';
var upperChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numChars = '0123456789';
var specialChars = " !\"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~";
var pool = '';

var lowerLimit = 8;
var upperLimit = 128;

function generatePassword() {
  var password = "Your Secure Password";  // Default password if function fails

  // Prompt for password length
  var input = prompt("How many characters would you like your password to contain?")
  
  if ((input >= lowerLimit) && (input <= upperLimit)) {
    // input is valid, continue
  }
  else if (input < lowerLimit) {
    alert("Password length must be at least 8 characters.");
    return password;
  }
  else if (input > upperLimit) {
    alert("Password length must be at most 128 characters.");
    return password;
  }
  else {
    alert("Password length must be entered as a number ranging from 8 to 128.");
    return password;
  }

  // Confirm user selections
  var lower = confirm("Click OK to confirm including lowercase characters.");
  var upper = confirm("Click OK to confirm including uppercase characters.");
  var numeric = confirm("Click OK to confirm including numeric characters.");
  var special = confirm("Click OK to confirm including special characters.");
  
  // Validate user selections
  if (!lower && !upper && !numeric && !special) {
    alert("Please select at least one character type to include in the password.");
    return password;
  }

  // Generate the password
  pool = '';      // Reset pool
  password = '';  // Reset password
  var random;

  if (lower) { pool += lowerChars; }
  if (upper) { pool += upperChars; }
  if (numeric) { pool += numChars; }
  if (special) { pool += specialChars; }

  /*
    Math.floor(Math.random() * 10) generates a random number between 0-9.
    To get a random number between 0-25 i need to use:
    Math.floor(Math.random() * 26)

    For only lowercase chars, pool.length = 26
    Math.floor(Math.random() * pool.length)
    should generate 0-25
  */
  for (var i = 0; i < input; i++) {
    // Generate random array index
    random = Math.floor(Math.random() * pool.length);
    
    if (random == pool.length) {
      alert("WARNING: about to select out of bounds character.");
      password = "Had to abort, please try again.";
      return password;
    }
    
    // Assign random char from pool to password
    password += pool[random];
  }

  return password;

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
