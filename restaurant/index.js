/**
 * Required External Modules
 */
const express = require('express');
const path = require('path');

/**
 * App Variables
 */

 const app = express();
 const port = process.env.PORT || '4242';
/**
 *  App Configuration
 */
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

/** 
 * Routes Definitions
 */
app.get('/restaurant', (request, response) => {
    response.render("index", { title: "Home" });
});

/**
 * Server Activation
 */
  app.listen(port, () => {
    console.log("Connected to the server!!!")
});