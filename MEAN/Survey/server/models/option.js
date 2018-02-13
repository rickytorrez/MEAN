const mongoose      = require('mongoose');

const OptionSchema    = new mongoose.Schema({
    option: {
        type: String,
        required: [true, "Option must be at least three characters long."],
        minlength: [3, "Option must be at least three characters long."]
    },
    vote: {
        type: Number,
        default: 0
    },
    poll: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Poll"
    }
}, { timestamps: true });

mongoose.model('Option', OptionSchema);