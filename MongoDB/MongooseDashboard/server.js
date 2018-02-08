/******* BASIC ROUTING ******/
var express     = require("express");
var path        = require("path");
var bodyParser  = require("body-parser");
var session     = require("express-session");
var app         = express();

/******* DATABASE ROUTING ******/
var mongoose    = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
    var NinjaSchema = new mongoose.Schema({
        firstName: {type: String, required: true, minlength: 3},
        lastName: {type: String, required: true, minlength: 3},
        age: {type: Number, required: true, min: 1, max: 100}
        }, {timestamps: true});
    mongoose.model('Ninja', NinjaSchema);     // We are setting this Schema in our Models as 'User'
    var Ninja = mongoose.model('Ninja')       // We are retrieving this Schema from our Models, named 'User'

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

/****** FORM ROUTE ******/
app.post('/addNinja', function(req, res){
    console.log("ninja info:", req.body);
    var ninja = new Ninja(req.body);
    ninja.save(function(err){
        if(err){
            console.log("nahhhh bro");
        } else {
            console.log("I'm proud of you bro!");
            res.redirect('/ninja')
        }
    })
})

/****** NINJA ROUTE, SHOWS NINJAS******/
app.get('/ninja', function(req, res) {
    Ninja.find({}, function(err, ninjas){
        console.log(ninjas)
        res.render('ninja', {ninjas : ninjas})
    })
})

/****** ROUTE TO EDIT BY ID ******/
app.get('/edit/:id', function(req, res) {
    Ninja.findById(req.params.id, function (err, ninjas){
        console.log(req.params.id);
        res.render('edit', {ninjas : ninjas});
    })
})

/****** EDIT NINJA ROUTE ******/
app.post('/editNinja/:id', function(req, res) {
    console.log(req.body);
    console.log(req.params.id);
    Ninja.findOneAndUpdate({_id: req.params.id}, req.body, {upsert:false}, function(err, ninjas){
        if (err) return handleError(err);
        console.log(ninjas);
        res.redirect('/');
    })
})

/****** DELETE NINJA ROUTE ******/
app.get('/delete/:id', function(req, res) {
    Ninja.findByIdAndRemove(req.params.id, function (err) {
        console.log("****************");
        res.redirect('/');
    })
})
// John was here

/******* PORT LISTEN ******/
app.listen(8000, function() {
    console.log("hardly working on 8000");
})