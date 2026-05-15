const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Set EJS as view engine
app.set("view engine", "ejs");

// Home route (form page)
app.get("/", (req, res) => {
    res.render("index");
});

// Handle form submission (POST)
app.post("/submit", (req, res) => {
    const { name, email } = req.body;

    // Redirect to result page with query params
    res.redirect(`/result?name=${name}&email=${email}`);
});

// Result page (GET)
app.get("/result", (req, res) => {
    const { name, email } = req.query;

    res.render("result", {
        name: name,
        email: email
    });
});

// Start server
app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});