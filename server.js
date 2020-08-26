// DEPENDENCIES
const express = require("express");

// EXPRESS CONFIGURATION
// Tells node that we are creating an "express" server
const app = express();

// Sets an initial port. Used by listener
const PORT = process.env.PORT || 8080;

//Configure Express to know where the external css and js is in /public directory
app.use(express.static(__dirname + "/public"));
// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// ROUTER
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// LISTENER
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
