const mongoose  = require('mongoose');
const bcrypt    = require('bcryptjs');

let UserSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, 'First name cannot be blank']
    },
    lastName: {
        type: String,
        required: [true, 'Last name cannot be blank']
    },
    email: {
        type: String,
        required: [true, 'An email must be provided']
    },
    password: {
        type: String,
        minlength: 8,
        required: [true, 'A password must be provided']
    }
}, {timestamps: true});

UserSchema.methods.authenticate = function(password){
    return bcrypt.compareSync(password, this.password);
}

mongoose.model('User', UserSchema);