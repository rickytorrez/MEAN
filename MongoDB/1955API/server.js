/******* BASIC ROUTING ******/
var express     = require("express");
var path        = require("path");
var bodyParser  = require("body-parser");
var session     = require("express-session");
var app         = express();

/******* APP USE ******/
app.use(session({ secret: "kittykatlicklick" }));

app.use(bodyParser.urlencoded({ extended:true }));

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

/******* REQUIRE ******/

require('./server/config/mongoose.js');

var routes_setter = require('./server/config/routes.js');
routes_setter(app);

/******* PORT LISTEN ******/
app.listen(8000, function() {
    console.log("hardly working on 8000");
})