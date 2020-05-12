const express = require("express"); 
const path = require("path");

const app = express(); 
app.use(express.static(path.join(__dirname, '/public')));
const PORT = process.env.PORT || 8000 ; 


app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(express.static("public")); 



app.get("/", function (req, res) {
    // console.log(`/ called`);
    // res.sendFile(path.join(__dirname, "/public/index.html"));
    res.send("Hello World")
});

app.get("/notes", function (req, res) {
    console.log(`/notes called`);
    res.sendFile(path.join(__dirname, "/public/notes.html")); 
}); 


app.listen(PORT, () => {
    console.log(`Server listening on https://localhost:${PORT}`);
})