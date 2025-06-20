var guessedNum = 56;
var randomNum = Math.floor(Math.random() * 100) + 1;
function checkNumber(userNum, actualNum) {
    if (userNum > actualNum) {
        console.log("Guess low number");
    }
    else if (userNum < actualNum) {
        console.log("Guess High Number");
    }
    else {
        console.log("You Guessed it right");
    }
}
;
checkNumber(guessedNum, randomNum);
