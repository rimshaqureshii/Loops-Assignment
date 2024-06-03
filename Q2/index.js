//Objective: Create a simple number guessing game where the user tries to guess a randomly
//generated number between 1 and a specified maximum value using a predefined set of guesses.
var maxiValue = 10;
var randomNum = (Math.floor(Math.random() * maxiValue + 1));
console.log(randomNum);
var correctGuess = false;
var guessNum = [3, 4, 1, 5, 8, 9, 1, 7];
var no = 0;
while (correctGuess && no < guessNum.length) {
    var currentGuess = guessNum[no];
    if (currentGuess === randomNum) {
        correctGuess = true;
        console.log("Congrats! you have guessed the correct number.");
    }
    else if (currentGuess < randomNum) {
        console.log("Your Guess ".concat(guessNum, " is to low... Try Again!"));
    }
    else
        (currentGuess > randomNum);
    {
        console.log("Your Guess ".concat(guessNum, " is to high ... Try Again!"));
    }
    ;
    no++;
}
;
console.log("The random number was ".concat(randomNum));
