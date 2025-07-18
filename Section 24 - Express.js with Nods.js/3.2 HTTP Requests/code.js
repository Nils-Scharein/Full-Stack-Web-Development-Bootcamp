import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/test", (req, res) => {
  res.send("<h1>test</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>about</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
