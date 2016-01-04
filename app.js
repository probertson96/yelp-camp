var express = require("express");
var app = express();
var bodyParser = require("body-parser");


app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));

// Routes
app.get("/", function(req, res) {
   res.render("landing");
});

app.get("/campgrounds", function(req, res) {
    var campgrounds = [
            {name: "Salmon Creek", image: "http://photosforclass.com/download/3844623716"},
            {name: "Granite Hill", image: "http://photosforclass.com/download/4344237662"},
            {name: "Shoreham", image: "http://photosforclass.com/download/15623542806"}
        ];
        
    res.render("campgrounds", {campgrounds: campgrounds});
});

// Listener
app.listen(process.env.PORT, process.env.IP, function() {
   console.log("Yelp Camp Server Started"); 
});