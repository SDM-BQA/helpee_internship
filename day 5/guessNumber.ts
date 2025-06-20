const guessedNum: number = 56;
let randomNum: number = Math.floor(Math.random() * 100) + 1;

function checkNumber(userNum: number, actualNum: number): void {
  if (userNum > actualNum) {
    console.log("Guess low number");
  } else if (userNum < actualNum) {
    console.log("Guess High Number");
  } else {
    console.log("You Guessed it right");
  }
}

checkNumber(guessedNum, randomNum);
