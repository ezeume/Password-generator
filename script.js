

// Assignment Code
var passText = document.querySelector("#password");
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "{", "}", "[", "]", "=", "<", ">", "/", "."];
var masterArr = []

document.getElementById("generate").addEventListener("click", writePassword);

function writePassword() {

  var passLength = prompt("Length of password");

  var includeUpper = confirm("Do you want uppercase?");

  if (includeUpper) {
    masterArr=masterArr.concat(upperCase);
  }
  var includeLower = confirm("Do you want lowercase?");

  if (includeLower) {
    masterArr=masterArr.concat(lowerCase);
  }
  var includeNumbers = confirm("Do you want numbers?");

  if (includeNumbers) {
    masterArr=masterArr.concat(numbers);
  }
  var includeSpecial = confirm("Do you want special");

  if (includeSpecial) {
    masterArr=masterArr.concat(special);
  }

  console.log(masterArr);

 

  var password = "";

  for (var i = 0; i<passLength; i++){
    console.log(masterArr[Math.floor(Math.random() * masterArr.length)])
    password=password+masterArr[Math.floor(Math.random() * masterArr.length)]
  }
passText.textContent=password;
  //console.log(password)

  // Write password to the #password input
 var passwordDisplay = document.getElementById("password");
 
  
   document.getElementById("password").innerHTML = password();

  // below should be inside a for loop where it will loop through for the length of the password


   //var password = generatePassword();

   //var passwordText = document.querySelector("#password");
    
   //passwordText.value = password;

}

var generateBtn = document.querySelector("#generator");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

