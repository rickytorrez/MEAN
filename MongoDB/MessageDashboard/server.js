/******* BASIC ROUTING ******/
var express     = require("express");
var path        = require("path");
var bodyParser  = require("body-parser");
var session     = require("express-session");
var app         = express();
var mongoose    = require('mongoose');

/******* DATABASE ROUTING ******/
mongoose.connect('mongodb://localhost/basic_mongoose');
var Schema = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3},
    text: {type: String, required: true},
    comments: [{type: Schema.Types.ObjectId, ref: 'Comment'}]
    }, {timestamps: true});

var CommentSchema = new mongoose.Schema({
    _post: {type: Schema.Types.ObjectId, ref: 'Post'},
    name: {type: String, required: true, minlength: 3},
    text: {type: String, required: true}
    }, {timestamps: true});

    mongoose.model('Post', PostSchema);     
    mongoose.model('Comment', CommentSchema);     
    var Post = mongoose.model('Post');       
    var Comment = mongoose.model('Comment');       

/******* APP USE ******/
app.use(session({ secret: "kittykatlicklick" }));

app.use(bodyParser.urlencoded({ extended:true }));

app.use(express.static(path.join(__dirname, "./static")));
app.set('views', path.join(__dirname, "./views"));
app.set('view engine', 'ejs');

/******* ROUTE AND FUNCTION ******/
/****** HOME ROUTE ******/
app.get('/', function(req, res) {
    Post.find({})
        .populate('comments')
        .exec(function (err, posts) {
            res.render("index", {posts : posts})
    })
})

/****** MESSAGE POST ROUTE ******/
app.post('/addMessage', function(req, res) {
    var post = new Post(req.body);
    console.log('post info:', post);
    post.save(function(err){
        if(err){
            console.log('wrooooooooooooooooong');
            res.redirect('/');
        } else {
            console.log('billions and billions');
            res.redirect('/');
        }
    })
})

/****** COMMENT POST ROUTE ******/
app.post('/addComment/:id', function(req, res) {
    Post.findOne({_id: req.params.id}, function(err, post){
        var comment = new Comment(req.body);
        comment._post = post._id;                               // Creates one comment with the parent post id
        post.comments.push(comment);                            // Pushes comment into array
        comment.save(function(err){                             // Saves comment into array
            post.save(function(err){                            // saves post
                if(err){
                    console.log('come onnnnnn');
                } else {
                    console.log('comment added');
                    res.redirect('/')
                }
            })
        })
    })
})

/******* PORT LISTEN ******/
app.listen(8000, function() {
    console.log("hardly working on 8000");
})