module.exports = (app) => {
    const util = require("util");
    const fs = require("fs");

    let db = [];

    const { v4: uuidv4 } = require("uuid");

    const writeFileAsync = util.promisify(fs.writeFile);
    const readFileAsync = util.promisify(fs.readFile);

    app.get("/api/notes", (req, res) => {
        console.log("test");
        readFileAsync("./db/db.json", "utf8")
            .then((notes) => {
                console.log(notes);
                db = JSON.parse(notes);
                res.json(db);
            })
            .catch((err) => res.status(500).json(err));
    });

    app.post("/api/notes", (req, res) => {
        let newNote = req.body;

        newNote.id = uuidv4(newNote);
        db.push(newNote);

        writeFileAsync("./db/db.json", JSON.stringify(db))
            .then(() => {

                res.json(newNote);
                console.log(newNote);
            })
            .catch((err) => res.status(500).json(err));
    });

    app.delete("/api/notes/:id", (req, res) => {
        let dbId = req.params.id;

        db = db.filter((note) => note.id != dbId);
        writeFileAsync("db/db.json", JSON.stringify(db));
        res.json({ success: true });
    });

}