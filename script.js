//Assignment code here
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var numeric = "123456789";
var specialCharacters = "!@#$%^&*(){}";
var collect = "";
var run = "";
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

function generatePassword() {
  let Choice = parseInt(prompt("enter number 8-128"))
  if(Choice < 8 || Choice > 128){
    console.log("pizza")
    return alert("please try again");}
  if(confirm("Would you like UPPER CASE letters")){
    console.log("pepperoni")
    collect += upperCase;}
  if(confirm("would you like lower case letters")){
    console.log("sausage")
    collect += lowerCase;}
  if(confirm("would you like numbers")){
    console.log("sauce")
    collect += numeric;}
  if(confirm("would you like special characters")){
    console.log("cheese")
    collect += specialCharacters;}
  for( i = 0; i < Choice; i++){
    console.log ("pineapple")
    run += collect.charAt(Math.floor(Math.random() * Choice));
  }
  return run
  

  




}