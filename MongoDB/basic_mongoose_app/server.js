/******* BASIC ROUTING ******/
var express     = require("express");
var path        = require("path");
var bodyParser  = require("body-parser");
var session     = require("express-session");
var app         = express();

/******* DATABASE ROUTING ******/
// mongoose.Promise = global.Promise;          // Find out wtf this does?
var mongoose    = require('mongoose');
mongoose.connect('mongodb://localhost/basic_mongoose');
    var UserSchema = new mongoose.Schema({
        name: String,
        age: Number
        })
    mongoose.model('User', UserSchema);     // We are setting this Schema in our Models as 'User'
    var User = mongoose.model('User')       // We are retrieving this Schema from our Models, named 'User'

/******* APP USE ******/

app.use(session({ secret: "kittykatlicklick" }));

app.use(bodyParser.urlencoded({ extended:true }));

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

/******* ROUTE AND FUNCTION ******/

/****** HOME ROUTE ******/
app.get('/', function(req, res) {
    User.find({}, function(err,users){                                      // Find users
        console.log(users);                                 
        res.render('index', {users : users});                               // Pass the user item
    })
})

/****** FORM ROUTE ******/
app.post('/users', function(req, res) {
    console.log("user info:", req.body);
    var user = new User({name: req.body.name, age: req.body.age});          // create a new User with the name and age corresponding to those from req.body
    user.save(function(err){                                                // Try to save that new user to the database (this is the method that actually inserts into the db) and run a callback function with an error (if any) from the operation.
        if(err){                                                            // if there is an error console.log that something went wrong!  
            console.log("come on bro, fix it up!");
        } else {                                                            // else console.log that we did well and then redirect to the root route
            console.log("nailed it!");
            res.redirect('/');
        }
    })
})

/******  ******/


/******* PORT LISTEN ******/
app.listen(8000, function() {
    console.log("hardly working on 8000");
})