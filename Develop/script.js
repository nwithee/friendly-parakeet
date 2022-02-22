//**Assignment code here

var passwordGeneration = function(){
  //Prompt the user to pick the criteria they want to assign to their password
  switch (passwordCriteria) {
    case 1:
      passwordLength();
  }
}


//Capture password criteria selection
var passwordCriteria = function (){
  var criteria ="";

  while (criteria === "" || criteria === null) {
    criteria = window.prompt ("To set your password length, please enter 1.  To set your password character types, please enter 2");
  }
  console.log ("You have selected option " + criteria);
  return criteria;
}

//prompt generated when password button is clicked


//password length code
var passwordLength = function (){
  var length = "";
  
  if(passwordCriteria = 1) {
    length = window.prompt("Choose a number between 8 and 128");
  }
  console.log ("Your password will have a length of " + length + " characters");
  return length;
}

//password character code

//generate password

// Get references to the #generate element
//var generateBtn = document.querySelector("#generate");


// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


passwordGeneration();