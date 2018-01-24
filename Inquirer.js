var inquirer = require("inquirer");
var guessChecker = require ("./guess-checker.js");
var counter = 0;
var wrongGuesses = 10;

var userPrompts = function (word){
    for (var i = 0; i < word.length; i++){
        if (word[i].guesses === false){
            console.log("_");
        }
        else {
            console.log(word[i].letter);
        }
    }
    inquirer.prompt([
    {
      type: "input",
      name: "userInput",
      message: "Which Letter would you like to guess?"
      
    }
  ]).then(function(guess) {
      //Changes to letter to true, showing the letter
    for (var i = 0; i < word.length; i++){
        if (guess.userInput === word[i].letter){
        word[i].guesses = true
        }
    }
    //checks for all true, therefore game win!
    for (var i = 0; i < word.length; i++){
        if (word[i].guesses === true){
            counter ++;
            console.log("Counter Check: " + counter)
        }
        else {
            wrongGuesses --;
            console.log("WRONG! You have " + wrongGuesses + "remaining!")
        }
    }
    if (counter === word.length){
        console.log("You win!");
       return userPrompts(randomWord)
    }
    //   console.log(word);
      console.log("The Guess was : " + guess.userInput);
      userPrompts(word);
  });
};
module.exports = userPrompts;