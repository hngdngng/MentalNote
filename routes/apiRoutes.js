// DEPENDENCIES
var path = require("path");
const fs = require("fs");

// ROUTING
module.exports = function (app) {
    app.post("/api/notes", (req, res) => {
        const notesDB = JSON.parse(fs.readFileSync("./db/db.json"));
        const newNote = req.body;
        notesDB.push(newNote);
        writeToFile("./db/db.json", JSON.stringify(notesDB));
        console.log("POST routing working")
        return res.json(newNote);
    });

    app.get("/api/notes", (req, res) => {
        const notesDB = JSON.parse(fs.readFileSync("./db/db.json"));
        console.log(notesDB);
        console.log("GET routing working")
        return res.json(notesDB);
    });
}

// function to Write File
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Success!");
    })
}