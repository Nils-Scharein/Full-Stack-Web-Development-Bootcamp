import express from "express";
import ejs from "ejs";
import path from "path";
import { fileURLToPath } from "url";

// Initialisierung
const app = express();
const port = 3000;

// __dirname (für ES-Module)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Setze EJS als Template Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Route
app.get("/", (req, res) => {
  const d = new Date();
  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = d.getDay();
  let activity;
  if (day === 0 || day === 6) {
    activity = "have fun";
  } else {
    activity = "work hard";
  }

  res.render("code", {
    today: weekday[day],
    activity: activity,
  });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
