const express = require("express");
const path = require("path");
const db = require("./db/db.json");
const fs = require("fs");
const { v4: uuidv4 } = require('uuid');



const app = express();
app.use(express.static(path.join(__dirname, "/public")));
const PORT = process.env.PORT || 8888;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/8", function (req, res) {
    // console.log(`/index called`);
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function (req, res) {
    // console.log(`/notes called`);
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("/api/notes", (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        // console.log(db);
    });
    return res.json(db);
});

app.post("/api/notes", (req, res) => {
    console.log(`POST /api/notes called`);
    let newNote = req.body;

    newNote.id = uuidv4(newNote);
    db.push(newNote);

    // console.log(newNote.id);
    console.log(newNote);
    res.json(newNote);
});

app.delete("/api/notes/:id", (req, res) => {
    let dbId = request.params.id;

    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        let savedNotes = res.json(db);
        for (let savedNoteId of db) {
            if (savedNotes[i].id === dbId) {
                console.log(savedNoteId);
                return res.json(savedNoteId);
            }
        }
        //     fs.writeFile("./db/db.json", savedNoteId)
    })
});


app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
});
