# Random Password

A brief description of what this project does and who it's for


## Authors

- [@austinnobregas] git hub https://github.com/Anobregas/random-password/

## Deployment

To deploy this project run
https://anobregas.github.io/random-password/
```bash
  npm run deploy
```


## License

[MIT](https://choosealicense.com/licenses/mit/)


## Usage/Examples

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
      var randomize = Math.floor(Math.random() * collect.length);
      run += collect.substring(randomize, randomize +1);
      console.log(run);
  }
  return run

}

