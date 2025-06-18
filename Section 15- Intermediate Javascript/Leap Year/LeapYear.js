let yearUser = prompt("Pls enter the Year: ");

isLeap(yearUser);

function isLeap(year) {
  if (year % 4 == 0) {
    if (year % 100 == 0) {
      if (year % 400 == 0) {
        console.log("Leap year.");
        alert("Leap year.");
        return true;
      } else {
        console.log("Not leap year.");
        alert("Not leap year.");
        return false;
      }
    } else {
      console.log("Leap year.");
      alert("Leap year.");
      return true;
    }
  } else {
    console.log("Not leap year.");
    alert("Not leap year.");
    return false;
  }
}
