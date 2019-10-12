
//Make an array for computer choices
var computerChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "x", "y", "z"];

//Make variable for win, lose,  guesses left, user guess and computer guess
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var letterGuessed = [];
// var previousGuess = [];

//Retrieving the id's from index.html
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var numOfGuessText = document.getElementById("numofguess-text");
var userGuessesText = document.getElementById("userguesses-text");

//Generating computer random letter
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

//Uses variable computerGuess to select random letter from array computerChoice
function compGuess() {
    computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];
}
//Call on function compGuess
compGuess();

//The game....
//,onkeyup captures players input or in this case event
document.onkeyup = function (event) {
    //Alerted when a key other than lowercase a-z was pressed
    if (event.keyCode < 65 || event.keyCode > 90) {
        alert("Invaild")

    } else  {
        //Added .toLowerCase() to make the game playable even when caps lock is on
        var userGuess = event.key.toLowerCase();
        letterGuessed.push(userGuess);
        //Guesses will go down after user presses a buttom
        guessesLeft--;
    }

    //Initating a win scenario
    if ((userGuess === computerGuess) && (guessesLeft > 0)) {
        wins++;
        restart();


    //Initiating a lose scenario
    } else if (guessesLeft == 0) {
        losses++;
        restart();
    }
    
    
       
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    numOfGuessText.textContent = "Guesses left: " + guessesLeft;
    userGuessesText.textContent = "Your guesses so far: " + letterGuessed;

};

//Function to restart  the game after 10 guesses or a win
var restart = function () {
    guessesLeft = 10;
    letterGuessed = [];
    compGuess();
}