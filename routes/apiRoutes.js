// DEPENDENCIES
var path = require("path");
const fs = require("fs");
// let notesDB = JSON.parse(fs.readFileSync("./data/db.json"));
let notesDB = [
    {
        "title": "Test Title",
        "text": "Test text"
    }
]

// ROUTING
module.exports = function (app) {
    app.post("/api/notes", (req, res) => {
        const newNote = req.body;
        notesDB.push(newNote);
        console.log(notesDB);
        console.log("API routing working")
        res.json(notesDB);
    });
}