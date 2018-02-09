/******* ROUTING ACCORDING TO WHAT'S TYPED IN THE URL BAR ******/

var person  = require('../controllers/person.js');
module.exports = function(app){
    app.get('/', function (req, res){
        person.show(req, res);
    })
    app.get('/:name', function (req, res){
        person.showByName(req, res);
    })
    app.get('/new/:name', function (req, res){
        person.create(req, res);
    })
    app.get('/remove/:name', function (req, res){
        person.deleteByName(req, res);
    })
}