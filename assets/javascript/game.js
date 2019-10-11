//Make an array for computer choices
var computerChoice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];


//Make variable for win, lose,  guesses left, user guess and computer guess
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var letterGuessed = [];


var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var numOfGuessText = document.getElementById("numofguess-text");
var userGuessesText = document.getElementById("userguesses-text");
 
//computer guess choice from computerChoice array
var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];


function compGuess(){
    computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];

console.log(computerGuess);
}
compGuess();

 //User Guess
document.onkeyup = function(event){
    guessesLeft --;
    var userGuess = event.key.toLowerCase();
    letterGuessed.push(userGuess);
        console.log(userGuess);
    

    if((userGuess === computerGuess) && (guessesLeft > 0)){
            wins++;
            restart();
    
    }else if(guessesLeft == 0){
            losses++;
            restart();
    }

winsText.textContent = "Wins: " + wins;
lossesText.textContent = "Losses: " + losses;
numOfGuessText.textContent = "Guesses left: " + guessesLeft;
userGuessesText.textContent = "Your guesses so far: " + letterGuessed;

};

//Function to restart  the game after 10 losses or a win
var restart = function(){
    guessesLeft = 10;
    letterGuessed = [];
    compGuess();
};





