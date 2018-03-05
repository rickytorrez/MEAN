let mongoose    = require('mongoose');

var UserSchema  = new mongoose.Schema({
    email   : {
        type:String,
        required: true,
        minlength: 4,
        maxlength: 255
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 255
    }
}, {timestamps: true})

mongoose.model('User', UserSchema)