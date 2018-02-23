var mongoose        = require("mongoose");

var UserSchema      = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "Your name should be longer than three characters"],
        required: [true, "Please provide a name!"]
    }
}, {timestamps: true})

mongoose.model("User", UserSchema);
var User = mongoose.model("User")