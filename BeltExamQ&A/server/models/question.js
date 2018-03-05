var mongoose        = require("mongoose");

var QuestionSchema  = new mongoose.Schema({
    question: {
        type: String,
        minlength: [10, "Your question must be longer than 10 characters."],
        required: [true, "Please provide a question"]
    },
    description: {
        type: String
    },
    _user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User not logged in"]
    },
    _answer: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Answer",
        required: [true, "User not logged in"]
    }]
}, { timestamps: true });

mongoose.model("Question", QuestionSchema);
var Question = mongoose.model("Question");