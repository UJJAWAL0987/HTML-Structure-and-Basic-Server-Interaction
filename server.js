const express = require("express");
const bodyParser = require("body-parser");
const app = express();

require("dotenv").config();

// Set EJS as the templating engine
app.set("view engine", "ejs");

// Middleware to parse the body of POST requests
app.use(bodyParser.urlencoded({ extended: true }));


// Routes for rendering the form
app.get("/", (req, res) => {
  res.render("index");
});

// Route for handling form submission
app.post("/submit", (req, res) => {
  const { name, email, message } = req.body;
  res.render("result", { name, email, message });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, (req,res) => {
    try {
        console.log(`Server is running on http://localhost:${PORT}`);
    } 
    catch (error) {
        console.log(error);
    }
  
});
