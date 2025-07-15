// HINTS:
// 1. Import express and axios
// 2. Create an express app and set the port number.
// 3. Use the public folder for static files.
// 4. When the user goes to the home page it should render the index.ejs file.
// 5. Use axios to get a random secret and pass it to index.ejs to display the
// secret and the username of the secret.
// 6. Listen on your predefined port and start the server.

import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import axios from "axios";

dotenv.config();
const port = 3000;
const app = express();
app.use(express.static("public"));

const URL = "https://secrets-api.appbrewery.com";
const BEARER_TOKEN = process.env.BEARER_TOKEN_API;

app.get("/", async (req, res) => {
  const response = await axios.get(URL + "/random");

  const data = {
    secret: response.data.secret,
    user: response.data.username,
  };
  res.render("code.ejs", data);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
