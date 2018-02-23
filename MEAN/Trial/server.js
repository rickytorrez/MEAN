/********** EXPRESS **********/
var express = require("express");
var app = express();
var session = require("express-session");
var port = 8000;

/********** STATIC FOLDER **********/
app.use(express.static(__dirname + "/client/dist"));

/********** BODY PARSER **********/
var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(session({
    secret: "eduardobaik",
    resave: false,
    saveUnintialized: true
}))

/********** MORGAN **********/
var morgan = require("morgan");
app.use(morgan("tiny"));

/********** LINKS **********/
require("./server/config/mongoose");
require("./server/config/routes")(app);

/********** ROUTES **********/
app.listen(port,() => 
console.log("struggling at " + port));

