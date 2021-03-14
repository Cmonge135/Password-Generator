//variables for uppercase and lowercase letters, special characters, and numbers
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numbers = "1234567890";
var specialCharacters = "`~!@#$%^&*()[]{};:<>?/";

var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click", generatePassword); // it enables clickable button to generate password

//the password that will be displayed in text box
var password = ""; 


function createPassword(word) {  

  var passwordText = document.querySelector("#password");
  passwordText.value = word;
}

function generatePassword() {
  var userChoice = "";
  var passLength = parseInt(window.prompt("How long would you like the password to be? ( 8-128 characters)"));
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log(passLength);
  if (!passLength) {
    
    return;
}
else if (passLength > 128) { 
  alert("Your input needs to be 128 characters or less");
  return;

}
else if (passLength < 8 ) { 
  alert("Your input needs to be 8 characters or more");
  return;
}

// allow user to choose whether to include uppercase and lowercase letters, special characters, and numbers
else { 
  var isUpperCase = window.confirm("click OK to confirm including uppercase characters");
  console.log(isUpperCase);
  var isLowerCase = window.confirm("click OK to confirm including lowercase characters");
  console.log(isLowerCase);
  var isSpecChosen = window.confirm("click OK to confirm including special characters");
  console.log(isSpecChosen);
  var isNumber = window.confirm("click OK to confirm including numeric characters");
}
if (!isSpecChosen && !isLowerCase && !isUpperCase && !isNumber) { 
  alert("At least 1 character type must be selected!");
  return;

}
 
//runs the corresponding line of code
if (isUpperCase){
  userChoice = userChoice.concat(upperCase);
}
if (isLowerCase){
  userChoice = userChoice.concat(lowerCase);
}
if (isSpecChosen){ 
  userChoice = userChoice.concat(specialCharacters); 
}
if (isNumber){
  userChoice = userChoice.concat(numbers);
}
writePassword(passLength, userChoice);
}

function writePassword(length, choice) { 


  var password = "";
for ( var i = 0; i < length; i++) { 
  password += choice.charAt(Math.floor(Math.random() * choice.length));
  }  
  createPassword(password); 
}