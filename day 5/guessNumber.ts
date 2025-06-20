const btn = document.getElementById("btn") as HTMLInputElement;
const numInput = document.getElementById("num") as HTMLInputElement;
const result = document.getElementById("result") as HTMLInputElement;

let randomNum: number = Math.floor(Math.random() * 100) + 1;

function checkNumber(userNum: number, actualNum: number): void {
  if (userNum > actualNum) {
    result.textContent = "Guess low number";
  } else if (userNum < actualNum) {
    result.textContent = "Guess High number";
  } else {
    result.textContent = "You Guessed it right";
  }
}

btn.addEventListener("click", () => {
  if (numInput.value) {
    const userGuess = parseInt(numInput.value);
    if (!isNaN(userGuess)) {
      checkNumber(userGuess, randomNum);
    } else {
      result.textContent = "Please enter a valid number.";
    }
    numInput.value = "";
  }
});
