alert("This is a popup Window!");
var ten = 10;
alert("Number 10 is: " + ten);

var maxLetters = 400;
var userText = prompt("Pls Type in the Message, that should be checked: ")
var textLength = userText.length;
var dif = maxLetters - textLength;
alert("The Text contains " + textLength + " you have " + dif + " left.")
