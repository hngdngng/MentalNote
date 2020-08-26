// DEPENDENCIES
var path = require("path");

// ROUTING
module.exports = function (app) {
    // If route (url) is '/notes', send user to notes page
    app.get("/notes", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/notes.html"));
    });

    // If no matching route is found default to home
    app.get("*", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
}

