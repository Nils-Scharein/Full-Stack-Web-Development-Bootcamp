/* 
1. Use the inquirer npm package to get user input.
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

import { input } from "@inquirer/prompts";
import fs from "fs";
import qr from "qr-image";

// 1. Use the inquirer npm package to get user input.

const answer = await input({
  message: "Enter the URL which should be turned into a QR Code: ",
});

console.log("User entered:", answer);

// 2. Use the qr-image npm package to turn the user entered URL into a QR code image.
const qr_svg = qr.image(answer);
qr_svg.pipe(fs.createWriteStream("QR_Image.png"));

// 3. Create a txt file to save the user input using the native fs node modul
const filePath = "./userAnswer.txt";
fs.writeFile(filePath, answer, (err) => {
  if (err) {
    console.error("Fehler beim Schreiben der Datei:", err);
  } else {
    console.log("File saved. With Message:", answer);
  }
});
