import express from "express";
import axios from "axios";
import dotenv from "dotenv";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com";

dotenv.config();

app.get("/", (req, res) => {
  res.render("code.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {
  //TODO 2: Use axios to hit up the /random endpoint
  //The data you get back should be sent to the ejs file as "content"
  //Hint: make sure you use JSON.stringify to turn the JS object from axios into a string.
  try {
    const response = await axios.get(`${API_URL}/random`);
    const result = JSON.stringify(response.data);

    res.render("code.ejs", { content: response.data });
    console.log(result);
  } catch (error) {
    console.error("Failed to make request:", error.message);
  }
});

app.get("/basicAuth", async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "test",
        password: "test",
      },
    });
  */

  try {
    const response = await axios.get(`${API_URL}/all?page=2`, {
      auth: {
        username: process.env.USERNAME_API,
        password: process.env.PASSWORD_API,
      },
    });
    const result = JSON.stringify(response.data);

    res.render("code.ejs", { content: response.data });
    console.log(result);
  } catch (error) {
    console.error("Failed to make request:", error.message);
  }
});

app.get("/apiKey", async (req, res) => {
  //TODO 4: Write your code here to hit up the /filter endpoint
  //Filter for all secrets with an embarassment score of 5 or greater
  //HINT: You need to provide a query parameter of apiKey in the request.

  try {
    const response = await axios.get(
      `${API_URL}/filter?score=5&apiKey=${process.env.API_KEY}`
    );
    const result = JSON.stringify(response.data);

    res.render("code.ejs", { content: response.data });
    console.log(result);
  } catch (error) {
    console.error("Failed to make request:", error.message);
  }
});

app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer `
    },
  });
  */

  try {
    const response = await axios.get(`${API_URL}/secrets/42`, {
      headers: {
        Authorization: `Bearer ` + process.env.BEARER_TOKEN_API,
      },
    });
    const result = JSON.stringify(response.data);

    res.render("code.ejs", { content: response.data });
    console.log(result);
  } catch (error) {
    console.error("Failed to make request:", error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
