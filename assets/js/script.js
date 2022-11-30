// Assignment Code
// Defining variables for password criteria
var upperCase = "A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z".split(
  ","
);
var lowerCase = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z".split(
  ","
);
var specChar = ["!", "@", "#", "$", "%", "^", "&", "*"];
var numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
console.log(upperCase);
console.log(lowerCase);
var possibleChar = [];

//create a function to prompt user for password options

function passOptions() {
  //Variable to store my user password length which needs to be between 8 and 128 characters 13 (13 RANDOM characters)
  var length = prompt(
    "How many characters would you like your password to be?"
  );
  console.log(length);

  // checking to make sure user inputs a NUMERIC value
  if (Number.isNaN(parseInt(length))) {
    alert("Password must be a numeric number");
    return null;
  }
  length = parseInt(length);
  // conditional to check if user enters a number 8 and greater
  if (length < 8) {
    alert("Pass length has to be 8 or more");
    return null;
  }

  // conditional to check if user enters a number less than 128
  if (length > 128) {
    alert("Pass length must be less than 128");
    return null;
  }

  //Conditional statements to check weather a user wants lower, upper, numbers, or special characters. Confirm takes in true/falst
  var hasLowerCase = confirm("Would you like to include lower case letters.");
  var hasUpperCase = confirm("Would you like to include upper case letters.");
  var hasSpecChar = confirm("Would you like to include special.");
  var hasNumbers = confirm("Would you like to include numbers.");

  // Create a conditional to make sure atleast one type of characteris selected
  if (
    hasLowerCase === false &&
    hasUpperCase === false &&
    hasSpecChar === false &&
    hasNumbers === false
  ) {
    alert("Must choose one char type");
    return null;
  }

  //Object to store user inputs
  var passwordOptions = {
    length: length,
    hasLowerCase: hasLowerCase,
    hasUpperCase: hasUpperCase,
    hasSpecChar: hasSpecChar,
    hasNumbers: hasNumbers,
  };

  // console.log(passwordOptions)
  return passwordOptions;
}

//function for randomizing elements from an array
function randomizeArray(arr) {
  //create a varaible to store the random arr.length
  var randomI = Math.floor(Math.random() * arr.length);
  //create a variable to store the random array
  var randomChar = arr[randomI];
  //return the random array

  return randomChar;
}

//Write a function to acutally generate the password
function generatePassword() {
  console.log("generatePassword");
  //create a variable to store the user object from our user input function
  var userOptions = passOptions();

  // Variable to store the password as its being created we will be PUSHING the results as they are happening here
  var result = [];

  // Create an array to store the types of characters to inclue in the password

  // create an array to store guaranted characters
  var guarantedChar = [];

  //Check if options exists if not exit the function
  if (!userOptions) return null;

  //conditial statements that add array of lowerCase characters into array of possible caracters based on the users input(4x)
  if (userOptions.hasLowerCase) {
    possibleChar = possibleChar.concat(lowerCase);
    guarantedChar.push(randomizeArray(lowerCase));
  }
  if (userOptions.hasUpperCase) {
    possibleChar = possibleChar.concat(upperCase);
    guarantedChar.push(randomizeArray(upperCase));
  }
  if (userOptions.hasSpecChar) {
    possibleChar = possibleChar.concat(specChar);
    guarantedChar.push(randomizeArray(specChar));
  }
  if (userOptions.hasNumbers) {
    possibleChar = possibleChar.concat(numbers);
    guarantedChar.push(randomizeArray(numbers));
  }
  console.log(possibleChar);
  console.log(result);
  //Create a for loop to iterate over the password length from the options object, selecting random I from the array of possible characters concating and return them into the results variable.
  for (var i = 0; i < userOptions.length; i++) {
    //random number to use as index to the array
    result.push(randomizeArray(possibleChar));
    // console.log(result);
  }

  

    //return the result and make it into a string and pass it into writePassword
    // console.log(result.join(""));
    return result.join("");

}

var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
