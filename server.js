var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 6969;

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
