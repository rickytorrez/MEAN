var mongoose        = require("mongoose");

var PlayerSchema    = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please input a name']
    },
    position: {
        type: String,
        required: false
    },
    status: {
        type: Number,
        default: 0
    }

}, {timestamps: true})

mongoose.model("Player", PlayerSchema)
var Player          = mongoose.model("Player")