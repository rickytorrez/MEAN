var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'must have a name!']
    }
}, {timestamps: true})

mongoose.model("User", UserSchema)