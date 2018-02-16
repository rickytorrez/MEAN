/********** EXPRESS **********/
let express         = require("express");
let session         = require("express-session");
let app             = express();

/********** STATIC FOLDER **********/
// app.use(express.static(__dirname + '/client/dist'));

/********** BODY PARSER **********/
let bodyParser      = require('body-parser');
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());

/********** MONGOOSE  **********/
/****  ****/
require("./server/config/mongoose");

/********** ROUTES PATH **********/
var route_setter    = require("./server/config/routes.js")(app)
// route_setter(app);

/********** MORGAN **********/
// let morgan          = require('morgan');
// app.use(morgan('dev'));

/********** SERVER LISTEN **********/
app.listen(8000, () => console.log("Hardly working on 8000"))