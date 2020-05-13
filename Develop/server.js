const express = require("express"); 
const path = require("path");
const db = require("../db/db.json"); //not working :/ 
const fs = require('fs'); 

const app = express(); 
app.use(express.static(path.join(__dirname, '/public')));
const PORT = process.env.PORT || 8888 ; 

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public")); 


let data = fs.readFile('db.json')
let newdata = JSON.parse(data); 
console.log(newdata); 

app.get("/", function (req, res) {
    console.log(`/index called`);
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/*", function (req, res) {
    console.log(`/index called`);
    res.sendFile(path.join(__dirname, "/public/index.html"));
});

app.get("/notes", function (req, res) {
    console.log(`/notes called`);
    res.sendFile(path.join(__dirname, "/public/notes.html")); 
});  

// app.get("/api/db", (req, res) => {
    // res.jsondb;
// ;
// app.post("/api/db", (req, res) => {
    // res.jsondb;
// ;


app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`);
})