// DEPENDENCIES
var path = require("path");
const fs = require("fs");

// ROUTING
module.exports = app => {
    app.post("/api/notes", (req, res) => {
        //pull current array of notes from database file
        const notesDB = JSON.parse(fs.readFileSync("./db/db.json"));
        const newNote = req.body;
        //add new note object to notes array
        notesDB.push(newNote);
        //add a unique ID to each object (their index +1)
        notesDB.forEach((note, i) => note.id = i + 1);
        //write updated array to db file
        writeToFile("./db/db.json", JSON.stringify(notesDB, null, 1));
        return res.json(newNote);
    });

    app.get("/api/notes", (req, res) => {
        //pull current array of notes from database file
        const notesDB = JSON.parse(fs.readFileSync("./db/db.json"));
        return res.json(notesDB);
    });

    app.delete("/api/notes/:id", (req, res) => {
        //store id in url
        const deletedID = req.params.id;
        //pull current array of notes from database file
        const notesDB = JSON.parse(fs.readFileSync("./db/db.json"));
        //filter array to delete note with matching id
        const updatedDB = notesDB.filter(note => note.id != deletedID);
        //write filtered array to db file
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