let mongoose    = require("mongoose");
let Schema      = mongoose.Schema;
let ObjectId    = Schema.Types.ObjectId;

mongoose.model("User", new mongoose.Schema({
    first:{ 
        type:String, 
        required: true,
        minlength: 2
    },
    last:{
        type:String, 
        required: true,
        minlength: 2
    },
    email:{
        type:String, 
        required: true
    },
    password:{
        type:String, 
        required: true,
        minlength: 8
    },
    confirm:{
        type:String, 
        required: true,
        minlength: 8
    },

    // Foreign Key
    // Listing array since it's a one to many
    listings:[{
        type: ObjectId, 
        ref: "Listing"
    }]

}, {timestamps: true}));