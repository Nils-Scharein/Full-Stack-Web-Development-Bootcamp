import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("code.ejs");
});

app.post("/submit", (req, res) => {
  const firstName = req.body.fName;
  const lastName = req.body.lName;
  const length = firstName.length + lastName.length;
  console.log(firstName);
  console.log(lastName);
  console.log(length);

  const data = {
    numberOfLetters: length,
  };
  res.render("code.ejs", data);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
