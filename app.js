var express = require("express");
var app = express();

app.set("view engine", "ejs");

// Routes
app.get("/", function(req, res) {
   res.render("landing");
});

// Listener
app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Yelp Camp Server Started"); 
});