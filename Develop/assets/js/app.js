var express = require("express");
var mysql = require("mysql");
var path = require("path");
var app = express();

var PORT = process.env.PORT || 7000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/notes", function (req, res){
    res.sendFile(path.join(__dirname, "../html/notes.html"));
});

app.get("*", function (req, res){
    res.sendFile(path.join(__dirname, "../html/index.html"));
});

app.listen(PORT, function() {
    console.log("app listening to " + PORT);
});