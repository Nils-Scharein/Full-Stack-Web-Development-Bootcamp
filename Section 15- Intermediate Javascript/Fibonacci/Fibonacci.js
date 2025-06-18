var counter = 100;

function fibonacciGenerator(n) {
  if (n == 1) {
    return [0];
  }

  var fibonacciArray = [0, 1];

  console.log("1: " + 0);
  console.log("2: " + 1);

  for (var i = 2; i <= n - 1; i++) {
    var newNumber = fibonacciArray[i - 1] + fibonacciArray[i - 2];
    fibonacciArray.push(newNumber);
    console.log(i + 1 + ": " + newNumber);
  }
  return fibonacciArray;
}

fibonacciGenerator(counter);
