/********** EXPRESS **********/
const express       = require("express");
const session       = require("express-session");
const app           = express();
const port          = 8000;

/********** BODY PARSER **********/
const bodyParser    = require("body-parser");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/********** STATIC FOLDER **********/
app.use(express.static(__dirname + "/client/dist"));

/********** MONGOOSE  **********/
require('./server/config/mongoose.js');
app.use(session({
    secret: "eduardobaik",
    resave: false,
    saveUninitialized: true
}))

/********** ROUTES PATH **********/
const route_setter  = require("./server/config/routes.js")(app)

/********** SERVER LISTEN **********/
app.listen(port, () => console.log(`struggling on ${port}...`))