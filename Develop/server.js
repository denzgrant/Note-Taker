const express = require("express"); 
const path = require("path");
const db = require("./db/db.json"); 
const fs = require('fs'); 

const app = express(); 
app.use(express.static(path.join(__dirname, '/public')));
const PORT = process.env.PORT || 8888 ; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public")); 


// let data = fs.readFile('db.json')
// let newdata = JSON.parse(data); 
// console.log(newdata); 


app.get("/8", function (req, res) {
    console.log(`/index called`);
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function (req, res) {
    console.log(`/notes called`);
    res.sendFile(path.join(__dirname, "/public/notes.html")); 
});  

app.get("/api/notes", (req, res) => {
  res.json(db); 
}); 

// app.post("/api/notes", (req, res) => {
//     res.readFile(__dirname, "/db/db.json");
// }); 
app.post("/api/notes", (req, res) => {
    console.log(`POST /api/notes called`);
    const newnote = req.body;
    newNote.id = (req.body.name.split(" "))[0].toLowerCase();

    console.log(newNote);

    db.push(newnote);

    res.json(newnote);
});

// app.delete("/api/notes/:id", (req, res) => {
//     res.params.id(__dirname, "/db/db.json");
// }); 



app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})