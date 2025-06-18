let names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];

function whosPaying(names) {
  let randomNumber = Math.floor(Math.random() * names.length);
  alert(names[randomNumber] + " is going to buy lunch today!");
  return names[randomNumber] + " is going to buy lunch today!";
}

whosPaying(names);
