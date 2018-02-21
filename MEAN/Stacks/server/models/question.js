const mongoose  = require('mongoose');

let QuestionSchema = new mongoose.Schema({
    question: {
        type: String,
        required: [true, "Please provide a question"]
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User not logged in"]
    },
    _answer: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer",
        required: [true, "User not logged"]
    }]
}, { timestamps: true });

mongoose.model("Question", QuestionSchema);
var Question = mongoose.model("Question");