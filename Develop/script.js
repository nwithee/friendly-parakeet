//**Assignment code here

//Capture password criteria selection
var passwordCriteria = function (){
  var criteria ="";

  while (criteria === "" || criteria === null) {
    criteria = window.prompt ("To set your password length, please enter 1.  To set your password character types, please enter 2");
  }
 
  passwordGenerate(criteria);
  

//fix this code
  if(criteria === 1 ){
    criteria = criteria + 1;
    alert ("You must now select your password characters");
    passwordGenerate(criteria);
  }
  else {
    criteria = criteria -1;
    alert ("You must now select your password length");
    passwordGenerate(criteria);
  }

};

//Function to generate password
var passwordGenerate = function (passwordCriteria) {
  if (passwordCriteria == 1){
    var length = passwordLength();
    console.log(length);
  }
  else {
    var characters = passwordCharacter();
    console.log(characters);
  }

};

//password length code
var passwordLength = function (){
  var length = "";
  
  while(length <= 7 || length >= 129) {
    length = window.prompt("Choose a number between 8 and 128");
  }
  console.log ("Your password will have a length of " + length + " characters");
  return length;
};

//password character code
var passwordCharacter = function (){
  var characters ="";

  characters = passwordUpper();
  characters = passwordLower(characters);
  characters = passwordNumber(characters);
  characters = passwordSpecial(characters);

  alert("You password is going to contain a random selection of the following characers:  " + characters);

  return characters;

  //random test code

  var length = 10;
  returnValue = "";
  for (var i = 0, n = characters.length; i < length; ++i){
    returnValue += characters.charAt(Math.floor(Math.random() * n));
  }

  console.log(returnValue);


};

 //upper character code    
  var passwordUpper =function(){
    var upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var upperPrompt = prompt("Do you want to use upper case letters - Y or N?");
      if (upperPrompt === "Y" || upperPrompt === "y"){
        return upper;
      }
      else{
        upper = ""
        return upper;
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
      else{
        lower = ""
        return lower;
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
      else{
        number = ""
        return number;
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
      else{
        special = ""
        return special;
      }     
    };


//create password

var passwordFinal = function(passwordGenerate){

}

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
//function writePassword() {
  //var password = generatePassword();
  //var passwordText = document.querySelector("#password");

  //passwordText.value = password;

//}

// Add event listener to generate button
//generateBtn.addEventListener("click", writePassword);


generateBtn.addEventListener("click",passwordCriteria);