let counter = 100;

while (counter != 0) {
  counter--;
  let bottlesBevor = counter;
  let bottlesAfter = counter - 1;

  if (bottlesBevor == 0) {
    console.log(
      "No more bottles of beer on the wall, no more bottles of beer."
    );
    console.log(
      "Go to the store and buy some more, 99 bottles of beer on the wall."
    );
  } else {
    console.log(
      bottlesBevor +
        " bottles of beer on the wall, " +
        bottlesBevor +
        " bottles of beer."
    );
    console.log(
      "Take one down and pass it around, " +
        (bottlesAfter === 0 ? "no more" : bottlesAfter) +
        " bottles of beer on the wall."
    );
  }
}
