function drumSound(path) {
  this.path = path;
  this.audio = new Audio(this.path);
  this.play = function () {
    this.audio.play();
  };
}

function buttonAnimation(button) {
  button.classList.add("pressed", "white");

  setTimeout(() => {
    button.classList.remove("pressed", "white");
  }, 100);
}

function playDrum(key) {
  switch (key) {
    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;
    default:
      return;
  }
}

var drumElements = document.querySelectorAll(".drum");

for (var i = 0; i < drumElements.length; i++) {
  drumElements[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;

    playDrum(buttonInnerHTML);
    buttonAnimation(this);
  });
}

document.addEventListener("keydown", function (event) {
  playDrum(event.key);
  var button = document.getElementsByClassName(event.key)[0];
  buttonAnimation(button);
});
