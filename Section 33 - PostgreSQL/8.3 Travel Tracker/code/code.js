import express from "express";
import bodyParser from "body-parser";
import pg from "pg";
import dotenv from "dotenv";

const app = express();
const port = 3000;
dotenv.config();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const client = new pg.Client({
  user: "postgres",
  password: process.env.POSTGRES_PASSWORD,
  host: "localhost",
  port: "5432",
  database: "world",
});

await client.connect();

async function getVisitedCountries() {
  try {
    const result = await client.query(
      "SELECT country_code from visited_countries"
    );
    const countries = result.rows.map((r) => r.country_code);
    console.log("getVisitedCountries: " + countries);
    console.log("TypeOf: " + typeof countries);
    countries.forEach((element) => console.log(element));
    return countries;
  } catch (err) {
    console.error("❌ Fehler in getVisitedCountries:", err.message);
  }
}

app.get("/", async (req, res) => {
  //Write your code here.
  const countries = await getVisitedCountries();
  console.log("extracted countries in /: " + countries);
  res.render("code.ejs", {
    countries: countries,
    total: countries.length,
  });
});

app.post("/add", async (req, res) => {
  try {
    let newVisitedCountrie = req.body.country.toUpperCase();

    const checkIfExist = await client.query(
      `SELECT capital, country FROM capitals WHERE UPPER(capital) = $1::text OR UPPER(country) = $1::text`,
      [newVisitedCountrie]
    );

    if (checkIfExist.rowCount === 0) {
      const countries = await getVisitedCountries();
      return res.render("code", {
        countries: countries,
        total: countries.length,
        error: "No Country Found",
      });
    }

    const { capital, country } = checkIfExist.rows[0] || {};

    const checkIfAlreadyVisited = await client.query(
      `SELECT country_code FROM visited_countries WHERE UPPER(country_code) = $1::text`,
      [country]
    );

    if (checkIfAlreadyVisited.rowCount > 0) {
      const countries = await getVisitedCountries();
      return res.render("code", {
        countries: countries,
        total: countries.length,
        error: `${capital} already exists in Database`,
      });
    }

    await client.query(
      `INSERT INTO visited_countries (country_code) VALUES ($1)`,
      [country]
    );

    res.redirect("/");
  } catch (error) {
    console.error("Error while processing /add request:", error);

    const countries = await getVisitedCountries();
    res.status(500).render("code", {
      countries: countries,
      total: countries.length,
      error: "Internal Server Error",
    });
  }
});

app.post("/delete", async (req, res) => {
  let visitedCountrieToDelete = req.body.country.toUpperCase();

  const checkIfAlreadyVisited = await client.query(
    `DELETE FROM visited_countries WHERE UPPER(country_code) = $1::text`,
    [visitedCountrieToDelete]
  );

  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
