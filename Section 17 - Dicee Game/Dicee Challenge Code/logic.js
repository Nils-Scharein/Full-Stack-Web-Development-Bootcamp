function randomNumberDice() {
  var randomNumber = Math.floor(Math.random() * 6) + 1;
  return randomNumber;
}

function setTitleToWinner(numPlayer1, numPlayer2) {
  var title = document.getElementById("title");

  if (numPlayer1 > numPlayer2) {
    title.textContent = "🚩Player 1 Wins!";
  } else {
    title.textContent = "Player 2 Wins!🚩";
  }
}

function rollDice() {
  var randomNumber1 = randomNumberDice();
  var randomNumber2 = randomNumber1;

  while (randomNumber1 == randomNumber2) {
    randomNumber2 = randomNumberDice();
  }

  setTitleToWinner(randomNumber1, randomNumber2);

  document
    .getElementById("image-first-dice")
    .setAttribute("src", "images/dice" + randomNumber1 + ".png");

  document
    .getElementById("image-second-dice")
    .setAttribute("src", "images/dice" + randomNumber2 + ".png");
}

document.getElementById("dice-roll-btn").addEventListener("click", rollDice);
