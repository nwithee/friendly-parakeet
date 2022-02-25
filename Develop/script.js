//**Assignment code here

//Capture password criteria selection
var passwordCriteria = function (){
  var criteria ="";

  while (criteria === "" || criteria === null) {
    criteria = window.prompt ("To set your password length, please enter 1.  To set your password character types, please enter 2");
  }
 
  var password = passwordGenerate(criteria);
  
  alert("Your password is " + password);

  return password;

};

//Function to generate password
var passwordGenerate = function (passwordCriteria) {
  if (passwordCriteria == 1){
    var length = passwordLength();
    alert ("You must now select your password characters");
    var characters = passwordCharacter();

    returnValue = ""
    for (var i = 0, n = characters.length; i < length; ++i){
    returnValue += characters.charAt(Math.floor(Math.random() * n));
    }
    return returnValue;
  }
  else {
    var characters = passwordCharacter();
    alert ("You must now select your password length");
    var length = passwordLength();

    returnValue = ""
    for (var i = 0, n = characters.length; i < length; ++i){
    returnValue += characters.charAt(Math.floor(Math.random() * n));
    }
    return returnValue;
  }

};

//password length code
var passwordLength = function (){
  var length = "";
  
  while(length <= 7 || length >= 129) {
    length = window.prompt("Choose a number between 8 and 128");
  }
  
  return length;
};

//password character code
var passwordCharacter = function (){
  var characters ="";

  characters = passwordUpper();
  characters = passwordLower(characters);
  characters = passwordNumber(characters);
  characters = passwordSpecial(characters);

  if (characters === "" || characters === null) {
    alert("You must select at least one password criteria");
    return passwordCharacter();
  }
  else {
    alert("You password is going to contain a random selection of the following characers:  " + characters);
    return characters;
  }
};

 //upper character code    
  var passwordUpper =function(){
    var upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var upperPrompt = prompt("Do you want to use upper case letters - Y or N?");
      if (upperPrompt === "Y" || upperPrompt === "y"){
        return upper;
      }
      else if (upperPrompt === "N" || upperPrompt === "n"){
        upper = ""
        return upper;
      }
      else {
        alert("You must answer Y or N");
        return passwordUpper(upper);
      }  
    };

//lower character code    
var passwordLower =function(passwordCharacter){
  var lower ="abcdefghijklmnopqrstuvwxyz";
  var lowerPrompt = prompt("Do you want to use lower case letters - Y or N?");
      if (lowerPrompt === "Y" || lowerPrompt === "y"){       
        lower = lower + passwordCharacter;
        return lower;
      }
      else if (lowerPrompt === "N" || lowerPrompt === "n"){
        lower = passwordCharacter;
        return lower;
      }
      else {
        alert("You must answer Y or N");
        return passwordLower(passwordCharacter);
      }     
    };

//number character code    
var passwordNumber =function(passwordCharacter){
  var number ="0123456789";
  var numberPrompt = prompt("Do you want to use numbers - Y or N?");
      if (numberPrompt === "Y" || numberPrompt === "y"){       
        number = number + passwordCharacter;
        return number;
      }
      else if (numberPrompt === "N" || numberPrompt === "n"){
        number = passwordCharacter;
        return number;
      }
      else {
        alert("You must answer Y or N");
        return passwordNumber(passwordCharacter);
      }     
    };

//special character code    
var passwordSpecial =function(passwordCharacter){
  var special ="!@#$%^&*()";
  var specialPrompt = prompt("Do you want to use special characters - Y or N?");
      if (specialPrompt === "Y" || specialPrompt === "y"){       
        special = special + passwordCharacter;
        return special;
      }
      else if (specialPrompt === "N" || specialPrompt === "n"){
        special = passwordCharacter;
        return special;
      }
      else {
        alert("You must answer Y or N");
        return passwordSpecial(passwordCharacter);
      }          
    };

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click",passwordCriteria);

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var password = passwordCriteria();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  

};