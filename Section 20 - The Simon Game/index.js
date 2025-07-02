// ===============================================
// Simon Says Game – main.js
// ===============================================

// -------------------------
// Game State
// -------------------------
var userClickedArr = [];
var computerChoiceArr = [];
var level = 0;
var runGame = false;
const buttonColors = ["red", "blue", "green", "yellow"];

// -------------------------
// Animation & Sound Effects
// -------------------------
class Sound {
  constructor(path) {
    this.path = path;
    this.audio = new Audio(path);
  }

  play() {
    this.audio.play();
  }
}

function buttonGameAnimation(button) {
  $(button).animate({ opacity: 0.5 }, 100).animate({ opacity: 1 }, 100);
}

function buttonPressedAnimation(button) {
  button.classList.add("pressed");
  setTimeout(() => {
    button.classList.remove("pressed");
  }, 100);
}

function getRandomColor() {
  const index = Math.floor(Math.random() * buttonColors.length);
  return buttonColors[index];
}

// -------------------------
// Game Logic
// -------------------------
function nextSequence() {
  var randomColor = getRandomColor();
  var button = $("#" + randomColor);
  var computerColor = button.attr("id");
  computerChoiceArr.push(computerColor);

  const sound = new Sound("sounds/" + computerColor + ".mp3");
  sound.play();

  buttonGameAnimation(button);
  level++;
  $("#level-title").text("Level: " + level);
  userClickedArr = [];
  console.log(computerChoiceArr);
}

function checkAnswer() {
  const currentIndex = userClickedArr.length - 1;
  if (userClickedArr[currentIndex] !== computerChoiceArr[currentIndex]) {
    endGame();
    return false;
  }
  return true;
}

// -------------------------
// User Input Handling
// -------------------------
$(".btn").on("click", function () {
  if (!runGame) return;

  buttonPressedAnimation(this);
  var userChosenColour = $(this).attr("id");
  userClickedArr.push(userChosenColour);
  console.log(userClickedArr);

  const sound = new Sound("sounds/" + userChosenColour + ".mp3");
  sound.play();

  if (!checkAnswer()) return;

  if (userClickedArr.length === computerChoiceArr.length) {
    setTimeout(() => {
      nextSequence();
    }, 1000);
  }
});

// -------------------------
// Start & End
// -------------------------
function startGame() {
  level = 0;
  userClickedArr = [];
  computerChoiceArr = [];
  runGame = true;
  $("#level-title").text("Level: " + level);
  nextSequence();
}

function endGame() {
  const audio = new Audio("sounds/wrong.mp3");
  audio.play();

  $("body").addClass("game-over");
  setTimeout(() => {
    $("body").removeClass("game-over");
  }, 100);

  $("#level-title").text("Game Over, Press Any Key to Restart");

  userClickedArr = [];
  computerChoiceArr = [];
  level = 0;
  runGame = false;
}

// -------------------------
// Global Key Listener
// -------------------------
$(document).keypress(function () {
  if (!runGame) {
    startGame();
  }
});
