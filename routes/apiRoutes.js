// DEPENDENCIES
var path = require("path");
const fs = require("fs");

// ROUTING
module.exports = app => {
    app.post("/api/notes", (req, res) => {
        const notesDB = JSON.parse(fs.readFileSync("./db/db.json"));
        const newNote = req.body;
        notesDB.push(newNote);
        notesDB.forEach((note, i) => note.id = i + 1);
        writeToFile("./db/db.json", JSON.stringify(notesDB, null, 1));
        return res.json(newNote);
    });

    app.get("/api/notes", (req, res) => {
        const notesDB = JSON.parse(fs.readFileSync("./db/db.json"));
        return res.json(notesDB);
    });

    app.delete("/api/notes/:id", (req, res) => {
        const deletedID = req.params.id;
        const notesDB = JSON.parse(fs.readFileSync("./db/db.json"));
        const updatedDB = notesDB.filter(note => note.id != deletedID);
        writeToFile("./db/db.json", JSON.stringify(updatedDB, null, 1));
        return res.json(updatedDB);
    });
}

// function to Write File
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully updated database");
    })
}