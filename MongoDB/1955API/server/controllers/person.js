/******* METHODS(FUNCTIONS) ROUTING ******/

var mongoose    = require('mongoose');
var Person      = mongoose.model('Person');

module.exports = {
    show: function( req, res ){
        Person.find({}, function (err, people){
            res.json(people);
        })
    },
    create: function( req, res ){
        var person = new Person(req.params);
        person.save(function (err) {
            if (err){
                console.log('naaaaaaaaah bro');
                res.redirect('/');
            } else {
                console.log('nailed it bro');
                res.redirect('/');
            }
        })
    },
    showByName: function( req, res ){
        Person.find({name: req.params.name}, function (err, person){
            res.json(person);
        })
    },
    deleteByName: function( req, res ){
        Person.remove({name: req.params.name}, function (err, person){
            if (err){
                console.log('come on freak!');
                res.redirect('/');
            } else {
                console.log('nailing it');
                res.redirect('/')
            }
        })
    }
}