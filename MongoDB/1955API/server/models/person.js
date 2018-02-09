/******* MODEL ROUTING ******/

var mongoose = require('mongoose');
var PersonSchema = new mongoose.Schema({
    name: {type: String, required: true, minlength: 3}
}) 
mongoose.model('Person', PersonSchema);