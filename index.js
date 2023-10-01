
const express = require('express');
const app = express();

const cors = require("cors");

const port = process.env.PORT || 5050;

const instructor = require("./JSON/instructor.json");
const recipes = require("./JSON/course.json");
const reviews = require("./JSON/reviews.json");

app.use(cors());

app.get("/instructor", (req, res) => {
    res.send(instructor);
});


app.get("/recipes", (req, res) => {
    res.send(recipes);
});

app.get("/reviews", (req, res) => {
    res.send(reviews);
});


app.get("/recipe/:id", (req, res) => {
    const id = req.params.id;
    const selectedRecipe = recipes.find((recipe) => recipe.recipe_id === id);
    res.send(selectedRecipe);
});


app.get("/instructor/:id", (req, res) => {
    const instructorId = req.params.id;
    const selectedList = recipes.filter((recipe) => recipe.instructor_id === instructorId);
    res.send(selectedList);
});

app.listen(port, () => {
    console.log(`server is running on port: ${port}`);
});