import express from "express";
import fs from "fs/promises";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.set("view engine", "ejs");

//Step 1: Run the solution.js file without looking at the code.
//Step 2: You can go to the recipe.json file to see the full structure of the recipeJSON below.

const recipe_dictionary = {
  chicken: 0,
  beef: 1,
  fish: 2,
};

async function loadRecipes() {
  try {
    const data = await fs.readFile("recipe.json", "utf-8");
    const recipes = JSON.parse(data);
    return recipes;
  } catch (err) {
    console.error("Error reading file:", err);
  }
}
const recipes = await loadRecipes();

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("code.ejs");
});

app.post("/recipe", (req, res) => {
  //Step 3: Write your code here to make this behave like the solution website.
  //Step 4: Add code to views/index.ejs to use the recieved recipe object.
  const choice = req.body.choice;
  let data;

  if (choice && recipe_dictionary.hasOwnProperty(choice)) {
    data = recipes[recipe_dictionary[choice]];
  } else {
    // Handle unknown or invalid choice gracefully
    return res.status(400).send("Invalid recipe choice");
  }
  console.log(data.ingredients.protein.name);
  res.render("code", { recipe: data });
});

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
