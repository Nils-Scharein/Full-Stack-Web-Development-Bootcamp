//To see how the final website should work, run "node solution.js".
//Make sure you have installed all the dependencies with "npm i".
//The password is ILoveProgramming

import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

function passwordCheck(passwordToCheck) {
  if (passwordToCheck === "ILoveProgramming") {
    return true;
  } else {
    return false;
  }
}

app.use((req, res, next) => {
  console.log("Time:", Date.now());
  console.log(req.body);
  next();
});

app._router.get("/", (req, res) => {
  //console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
  if (!req.body || !req.body.password) {
    return res.sendStatus(400);
  }

  if (passwordCheck(req.body.password)) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.redirect("/");
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
