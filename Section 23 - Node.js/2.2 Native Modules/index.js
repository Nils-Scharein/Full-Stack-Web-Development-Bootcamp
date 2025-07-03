const fs = require("fs");
var message = "Hallo Welt";
var filePath = "./text.txt";
fs.writeFile(filePath, message, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("File saved. With Message: " + message);
  }
});

fs.readFile(filePath, "utf-8", (err, data) => {
  if (err) {
    console.log(err);
    return;
  } else {
    console.log("Data in File " + filePath + " was " + data);
  }
});
