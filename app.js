const express = require("express");
const path = require("path");

const htmlRoute = require("./routes/html-routes.js");
const apiRoute = require("./routes/api-routes.js");



const app = express();
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


apiRoute(app);
htmlRoute(app);

module.exports = app; 