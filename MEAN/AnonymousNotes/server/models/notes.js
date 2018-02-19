var mongoose        = require("mongoose");

var NoteSchema      = new mongoose.Schema({
    content: {
        type: String,
        minlength: 10,
        required: [true, 'Please input some content']
    }
}, {timestamps: true});

mongoose.model("Note", NoteSchema)
var Note            = mongoose.model("Note")