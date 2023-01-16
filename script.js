// Assignment code here
var specialCharacters = ["@", "!", "#", "%", "^", "&"];
var lowerCase = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
var upperCase = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
var numeric = [1, 2, 3, 4, 5, 6, 7, 8, 9,];


function generatePassword(){
  let run = randomLowerCase() + randomNumeric() + randomUpperCase() + randomSpecialCharacters()
  console.log("pizza");
  return run
}
function randomLowerCase(){
  console.log("pepperoni")
  return lowerCase[Math.floor(Math.random() * 10)]
}
function randomUpperCase(){
  console.log("sauce")
  return upperCase[Math.floor(Math.random() * 10)]
}
function randomNumeric(){
  console.log("cheese")
  return numeric[Math.floor(Math.random() * 9)]
}
function randomSpecialCharacters(){
  console.log("mushrooms")
  return specialCharacters[Math.floor(Math.random() * 6)]
}
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var upper = confirm("Would you like any upper case letters?")
  var lower = confirm("Would you like any lower case?")
  var number = confirm("Would you like numbers?")
  var symbols = confirm("and symbols?")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  console.log("pepper")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);