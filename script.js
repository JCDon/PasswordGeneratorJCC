// Assignment Code
var generateBtn = document.querySelector("#generate");

// Created an array of capital letters, lowercase letters, numbers, and special characters

var letters = "abcdefghijklmnopqrstuvwxyz"

var cap = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

var nums = "123456789"  

var specialC = "!@#$%&?"

// Printed the password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Created a generatePassword function and write all the logic within this function

function generatePassword() {
  
  // Created a prompt to ask user how many characters theyd like theyre password to be ( at least 8 characters and no more than 128) and set to a variable

    var countQ = parseInt(prompt("How long would you like your password to be? (Between 8 and 128 characters)"))

    
   // Created a confirm to ask if they want capital letters and set to a variable

    var capLetQ = confirm("Would you like to include capital letters?")

  // Created a confirm to ask if they want lowercase letters and set to a variable

    var lowLetQ = confirm("Would you like to include lowercase letters?")

  // Created a confirm to ask if they want numbers and set to a variable

    var numQ = confirm("Would you like to include numbers?")

  // Created a confirm to ask if they want special characters and set to a variable

    var specialCharQ = confirm("Would you like to include special characters?")

  // Created a conditional to make sure the user has chosen at least on type of character
    // if user cancels all options then they must click again
    if (numQ === false && lowLetQ === false && capLetQ === false && specialCharQ === false) {
      alert("Please choose at least one option!");
      window.location.reload();
  } 
   if (countQ > 7 && countQ < 129) {
          
      } else {
        alert("You need the length of your password to be somewhere between 8-128 characters!");
            window.location.reload();
      }
  //   if (countQ > 128) {
  //     alert("You can't have more than 128 characters!");
  //     window.location.reload();
  // }

  // logged the value of the user's password length 

    console.log(countQ)

// Created an empty array to push all requested characters

  var myFinalArrOfChar = ""
  
// Created if statements that checks if user said yes or no. Yes pushes all the characters to the empty array
  
  if (specialCharQ === true){
    myFinalArrOfChar = myFinalArrOfChar + specialC;
  } if (capLetQ === true) {
    myFinalArrOfChar = myFinalArrOfChar + cap;
  } if (lowLetQ === true) {
    myFinalArrOfChar = myFinalArrOfChar + letters;
  } if (numQ === true) {
    myFinalArrOfChar = myFinalArrOfChar + nums;
  }
 
  // I logged my finalArray for debugging purposes

  console.log(myFinalArrOfChar)

  // Built a for loop over the final array, it runs the length of the password

  var finalPass = ""
  for (let i = 0; i < countQ; i++) {
    finalPass = finalPass+myFinalArrOfChar[Math.floor(Math.random()*myFinalArrOfChar.length)]
  }
  return finalPass
}
  
  // Added event listener to generate button
  generateBtn.addEventListener("click", writePassword);

  // A default set for the placeholder
password.setAttribute("placeholder", "Your Secure Password")