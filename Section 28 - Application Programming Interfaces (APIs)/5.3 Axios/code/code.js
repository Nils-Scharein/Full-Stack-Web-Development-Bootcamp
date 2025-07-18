import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

// Step 1: Make sure that when a user visits the home page,
//   it shows a random activity.You will need to check the format of the
//   JSON data from response.data and edit the index.ejs file accordingly.
app.get("/", async (req, res) => {
  try {
    const response = await axios.get("https://bored-api.appbrewery.com/random");
    const result = response.data;
    res.render("code.ejs", { data: result });
    console.log(result);
  } catch (error) {
    console.error("Failed to make request:", error.message);
    res.render("code.ejs", {
      error: error.message,
    });
  }
});

app.post("/", async (req, res) => {
  console.log(req.body);

  // Step 2: Play around with the drop downs and see what gets logged.
  // Use axios to make an API request to the /filter endpoint. Making
  // sure you're passing both the type and participants queries.
  // Render the index.ejs file with a single *random* activity that comes back
  // from the API request.
  // Step 3: If you get a 404 error (resource not found) from the API request.
  // Pass an error to the index.ejs to tell the user:
  // "No activities that match your criteria."
  try {
    const response = await axios.get(
      `https://bored-api.appbrewery.com/filter?type=${req.body.type}&participants=${req.body.participants}`
    );
    const result = response.data;
    const randomActivity = result[Math.floor(Math.random() * result.length)];

    res.render("code.ejs", { data: randomActivity });
    console.log(result);
  } catch (error) {
    console.error("Failed to make request:", error.message);
    if (error.response && error.response.status === 404)
      res.render("code.ejs", {
        error: "No activities that match your criteria.",
      });
  }
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
