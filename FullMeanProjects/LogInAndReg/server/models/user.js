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

UserSchema.methods.hash = function(password){
    return bcrypt.hashSync(password, bcrypt.genSaltSync(10))
}

UserSchema.pre("save", function(done){
    this.password = this.hash(this.password);
    done();
})

UserSchema.methods.authenticate = function(password_form, password){
    return bcrypt.compareSync(password_form, password);
}



mongoose.model('User', UserSchema);