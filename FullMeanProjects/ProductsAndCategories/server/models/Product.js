let mongoose        = require('mongoose');

var ProductSchema   = new mongoose.Schema({
    title   : {
        type: String,
        required: true,
        minlength: 4,
        maxlength: 255,
    }
}, {timestamps: true})

mongoose.model('Product', ProductSchema)