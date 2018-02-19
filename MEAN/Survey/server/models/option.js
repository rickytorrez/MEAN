var mongoose = require('mongoose');
var OptionSchema = new mongoose.Schema({
    option: {
        type: String,
        required: [true,"Option must be at least three characters"],
        minlength: [3, "Option must be at least three characters"]
    },
    //FOREIGN KEYS BELOW
    vote: {
        type: Number,
        default: 0
    },
    poll: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Poll"
    }
}, {timestamps: true});

mongoose.model("Option", OptionSchema);

//TABLE WILL HAVE THREE COLUMNS