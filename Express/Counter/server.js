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

/** HOME ROUTE AND COUNT BY 1 **/
app.get('/', function(req, res){
    if (req.session.count == null){
        req.session.count = 1;
    } else {
        req.session.count = req.session.count + 1;
    }
    console.log(req.session.count);
    res.render("index", { count:req.session.count });
})

/** COUNT BY 2 **/
app.get('/byTwo', function(req, res){
    req.session.count += 1;
    console.log(req.session.count);
    res.redirect('/');
})

/** RESET COUNT **/
app.get('/reset', function(req, res){
    req.session.count = 0;
    console.log(req.session.count);
    res.redirect('/');
})

/******* PORT LISTEN ******/
app.listen(8000, function() {
    console.log("hardly working on 8000");
})