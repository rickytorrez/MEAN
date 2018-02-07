/******* BASIC ROUTING ******/
var express     = require("express");
var path        = require("path");
var bodyParser  = require("body-parser");
var session     = require("express-session");
var app         = express();

/******* DATABASE ROUTING ******/
var mongoose    = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
    var QuoteSchema = new mongoose.Schema({
        name: {type: String, required: true, minlength: 3},
        quote: {type: String, required: true, minlength: 10}
        }, {timestamps: true});
    mongoose.model('Quote', QuoteSchema);     // We are setting this Schema in our Models as 'User'
    var Quote = mongoose.model('Quote')       // We are retrieving this Schema from our Models, named 'User'

/******* APP USE ******/

app.use(session({ secret: "kittykatlicklick" }));

app.use(bodyParser.urlencoded({ extended:true }));

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

/******* ROUTE AND FUNCTION ******/

/****** HOME ROUTE ******/
app.get('/', function(req, res) {                        
    res.render('index');                               
})

/****** QUOTE ROUTE ******/
app.get('/quotes', function(req, res) {
    Quote.find({}, function(err,quotes){
        console.log(quotes);
        res.render('quotes', {quotes : quotes});
    }) 
})

/****** FORM ROUTE ******/
app.post('/addQuote', function(req, res){
    console.log("quote info:", req.body);
    var quote = new Quote({name: req.body.name, quote: req.body.quote});
    quote.save(function(err){
        if(err){
            console.log("WRRROOOOONG!");
        } else {
            console.log("RIGGGGGGHTT!");
            res.redirect('/quotes')
        }
    })
})

/******* PORT LISTEN ******/
app.listen(8000, function() {
    console.log("hardly working on 8000");
})