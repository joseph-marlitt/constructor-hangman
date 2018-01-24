// This is an application that needs to take in a variable through the inquirer.
var arrayOfWords = ["rocky road", "vanilla", "mint chocolate chip", "rainbow sherbert", "caramel", "pistachio"];
var userPrompts = require ("./inquirer.js");

// var splitWord = randomWord.split ("");
// var alreadyGuessed = [];
var randomWord = require ("./random-word.js");
// Prompt the user to provide location information.
// inquirer.prompt([

//   {
//     type: "input",
//     name: "userInput",
//     message: "Which Letter would you like to guess?"
//   }
// ]).then(function(guess) {
//     console.log("The Guess was : " + guess.userInput);

// });

userPrompts (randomWord);