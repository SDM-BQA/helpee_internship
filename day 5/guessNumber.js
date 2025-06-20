var btn = document.getElementById("btn");
var numInput = document.getElementById("num");
var result = document.getElementById("result");
var randomNum = Math.floor(Math.random() * 100) + 1;
function checkNumber(userNum, actualNum) {
    if (userNum > actualNum) {
        result.textContent = "Guess low number";
    }
    else if (userNum < actualNum) {
        result.textContent = "Guess High number";
    }
    else {
        result.textContent = "You Guessed it right";
    }
}
btn.addEventListener("click", function () {
    if (numInput.value) {
        var userGuess = parseInt(numInput.value);
        if (!isNaN(userGuess)) {
            checkNumber(userGuess, randomNum);
        }
        else {
            result.textContent = "Please enter a valid number.";
        }
        numInput.value = "";
    }
});
