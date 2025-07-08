import express from "express";
import bodyParser from "body-parser";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

/* Wenn mit Middleware erstellt werden soll */
var bandName = "";
function bandNameGenerator(req, res, next) {
  console.log(req.body);
  bandname = req.body["street"] + req.body["pet"];
  next();
}

app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log("Time:", Date.now());
  next();
});

app._router.get("/", (req, res) => {
  //console.log(__dirname + "/public/index.html");
  res.sendFile(__dirname + "/public/index.html");
});

app.post("/submit", (req, res) => {
  if (!req.body || !req.body.street || !req.body.pet) {
    return res.sendStatus(400);
  }

  res.send(
    "<h1>Your Band Name is</h1>" +
      "<h2>" +
      req.body.street +
      req.body.pet +
      "</h2>"
  );
  console.log(req.body.street);
  console.log(req.body.pet);
  console.log(req.body);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
