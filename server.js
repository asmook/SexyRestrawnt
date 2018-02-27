var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 6969;

var reservations = [
  {
    Name: "yoda",
    phone: "303030303",
    email: "Jedi Master",
    unique: 900,
  }
];

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/table", function(req, res) {
  res.sendFile(path.join(__dirname, "table.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/api/:characters", function(req, res) {
  var chosen = req.params.characters;

  if (chosen === "tables" || chosen === "waitlist") {
    console.log(chosen);
  }
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
