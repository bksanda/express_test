var express = require('express');
var bodyParser = require('body-parser');
var app = express();

// app.set is going to be used for setting app
app.set("view engine", "ejs");

// app.use is for middleware (plugins)
app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(__dirname + '/public'));

// Faux DB
var emails = []

// Our email form
app.get("/", function(req, res) {
  // res.send("This is our first express app");
  res.render("email")
});

// Our post data
app.post("/process", function(req,res) {
  emails.push(req.body.email)
  // res.send(req.body);
  res.render("subscribe", {allEmails: emails})
})

app.get("/add/:x/:y", function(taco, burrito) {
  burrito.send("It is... " + (parseInt(taco.params.x) + parseInt(taco.params.y)))
})

app.get("/multiply/:x/:y", function(taco, burrito) {
  burrito.send("It is... " + (parseInt(taco.params.x) * parseInt(taco.params.y)))
})

app.listen(3000);