/********** EXPRESS **********/
let express     = require('express');
let app         = express();

/********** STATIC FOLDER **********/
app.use(express.static(__dirname + '/client/dist'));

/********** MONGO DATABASE **********/
let mongoose    = require('mongoose')
mongoose.connect('mongodb://localhost/userSchema');
let UserSchema  = new mongoose.Schema({
    first_name  : { type: String, require: true },
    last_name   : { type: String, require: true },
    email       : { type: String, require: true },
    editable    : { type: Boolean, require: false }
})
mongoose.model("User", UserSchema);                     // Setter
let User        = mongoose.model("User")                // Getter

// const path      = require('path');

/********** BODY PARSER **********/
let bodyParser  = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

/********** MORGAN **********/
let morgan      = require('morgan');
app.use(morgan('dev'));

/********** ROUTES **********/
/** Get Users **/
app.get('/users', (req, res, next) =>{
    console.log("Server > GET '/users' ")
    User.find({}, (err,users)=>{
        return res.json(users);
    })
})

/** Create Users **/
app.post('/users', (req, res, next) =>{
    console.log("Server > POST '/users' > user ", req.body)
    delete req.body._id
    User.create(req.body, (err, user) => {
        if (err) return res.json(err)
        else return res.json(user)
    })
})
/** Destroy **/
app.delete('/users/:id', (req,res,next) =>{
    console.log("Server > DELETE '/users/:id' > id", req.params.id);
    User.deleteOne({ _id:req.params.id }, (err, data)=> {
        if (err) return res.json(err)
        else return res.json(true)
    })
})
/** Destroy **/
app.put('/users/:id', (req,res,next) =>{
    console.log("Server > PUT '/users/:id' > id", req.params.id);
    console.log("Server > PUT '/users/:id' > user", req.body);
    User.update({_id:req.params.id}, req.body ,(err, rawData) => {
        if (err) return res.json(err)
        else return res.json(true)
    })
})

app.all("*", (req,res,next) => {
    res.sendfile(path.resolve("./client/dist/index.html"))
})

/********** SERVER LISTEN **********/
app.listen(8000, () => console.log("Hardly working on 8000"))
