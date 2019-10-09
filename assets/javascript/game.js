//Make an array for computer choices
var computerChoice = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","x","y","z"];


//Make variable for win, lose set both equal to zero 
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var userGuess = [];
var computerGuess = [];

// Reference HTML by retreieving id with getElementById

var directionsText = document.getElementById("directions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var numOfGuessText = document.getElementById("numofguess-text");
var userGuessesText = document. getElementById("userguesses- text");

//computer guess choice from computerChoice array

var computerGuess = computerChoice[Math.floor(Math.random() * computerChoice.length)];


//Function for user 

document.onkeyup = function(){



}


//Push?? user guess to guesses



//if, else if, else