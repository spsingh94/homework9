var express = require("express");
var mysql = require("mysql");

var app = express();

var PORT = 7000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/notes", function (req, res){
    res.sendFile(__dirname, "../../notes.html");
});

app.get("*", function (req, res){
    res.sendFile(__dirname, "../../index.html");
});