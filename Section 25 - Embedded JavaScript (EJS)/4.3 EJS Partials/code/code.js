import express from "express";

// Initialisierung
const app = express();
const port = 3000;

// EJS als Template Engine konfigurieren
app.set("view engine", "ejs");
app.use(express.static("public"));

// Startseite
app.get("/", (req, res) => {
  res.render("code");
});

// About-Seite
app.get("/about", (req, res) => {
  res.render("about");
});

// Contact-Seite
app.get("/contact", (req, res) => {
  res.render("contact");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
