
var arrayOfWords = ["rocky road", "vanilla", "mint chocolate chip", "rainbow sherbert", "caramel", "pistachio"];
var randomWord = arrayOfWords[Math.floor(arrayOfWords.length * Math.random())];
var splitWord = randomWord.split ("");
var guesses = [];


function LetterFunction(letter){
    this.letter = letter,
    this.guesses = false
}

for (var i = 0; i < randomWord.length; i++){
    var letter = new LetterFunction(randomWord[i])
    guesses.push(letter); 

}

module.exports = guesses;





