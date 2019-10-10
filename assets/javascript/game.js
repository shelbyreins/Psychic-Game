//Make an array for computer choices
var computerChoice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];


//Make variable for win, lose,  guesses left, user guess and computer guess
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var letterGuessed = [];
var computerGuess = [];

// Reference HTML by retreieving id with getElementById

var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var numOfGuessText = document.getElementById("numofguess-text");
var userGuessesText = document. getElementById("userguesses-text");



document.onkeyup = function(event){
    var userGuess = event.key;
    letterGuessed.push(userGuess);
    console.log(userGuess);

    //computer guess choice from computerChoice array
    var compGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

if((userGuess === computerGuess) && (guessesLeft > 0)){
    wins++;
    guessesleft = 10;
    letterGuess.length = 0;
    computerGuess.length = 0;

}
else if ((userGuess !== computerGuess) && (guessesLeft > 0)){
    guessesLeft = guessesLeft -1;
}

else{ 
    losses++;
    guessesLeft = 10;
    letterGuessed.length = 0;
    computerGuess.length = 0;
}

winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
numOfGuessText.textContent = "Guesses left: " + guessesLeft;
userGuessesText.textContent = "Your guesses so far: " + letterGuessed;
}






