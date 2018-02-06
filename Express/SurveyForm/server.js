/******* BASIC ROUTING ******/
var express     = require("express");
var path        = require("path");
var bodyParser  = require("body-parser");

var app         = express();

var session     = require("express-session");
app.use(session({ secret: "eduardobaik" }));

app.use(bodyParser.urlencoded({ extended:true }));

app.use(express.static(path.join(__dirname, "./static")));

app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

/******* ROUTE AND FUNCTION ******/

/****** HOME ROUTE ******/
app.get('/', function(req, res) {
    res.render('index');
})

/****** FORM ROUTE ******/
app.post('/userInfo', function(req, res) {
    console.log("user info:", req.body);
    console.log(req.body.name);
    req.session.info = req.body;
    res.redirect('/result');
})

/****** RESULT ROUTE ******/
app.get('/result', function(req, res){
    res.render('results', {userInfo: req.session.info });
})

/******* PORT LISTEN ******/
app.listen(8000, function() {
    console.log("hardly working on 8000");
})