const mongoose      = require('mongoose');

const PollSchema    = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Question myst be at leart 10 characters"],
        minlength: [10, "Question myst be at leart 10 characters"]
    },
    options: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Option"
    }],
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }

}, { timestamps: true });

mongoose.model('Poll', PollSchema);