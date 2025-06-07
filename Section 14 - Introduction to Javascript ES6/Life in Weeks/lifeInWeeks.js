function lifeInWeeks() {
    var userAnswer = prompt("Pls enter your age: ");
    var yearsRemaining = 90 - userAnswer;
    var days = yearsRemaining * 365;
    var weeks = yearsRemaining * 52;
    var months = yearsRemaining * 12;
    alert("You have " + days + " days, " + weeks + " weeks, and " + months + " months left");
}

lifeInWeeks();