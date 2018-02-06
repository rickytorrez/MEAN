var express     = require("express");
var path        = require("path");
var session     = require("express-session");

var app         = express();
var bodyParser  = require("body-parser");

var session     = require("express-session");
app.use(session({ secret: "eduardobaik" }));

app.use(bodyParser.urlencoded({ extended:true }));

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

/******* ROUTE AND FUNCTION ******/

app.get('/', function(req, res){
    if (req.session.count == null){
        req.session.count = 1;
    } else {
        req.session.count = req.session.count + 1;
    }
})

/******* PORT LISTEN ******/
app.listen(8000, function() {
    console.log("hardly working on 8000");
})