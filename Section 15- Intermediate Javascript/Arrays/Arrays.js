let guestList = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"];

let inputUser = prompt("Whats your Name: ");

if (guestList.includes(inputUser)) {
  alert("Welcome!");
} else {
  alert("Better Luck next time!");
}
