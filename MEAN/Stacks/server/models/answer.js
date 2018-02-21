const mongoose      = require('mongoose');

var AnswerSchema    = new mongoose.Schema({
    answer: {
        type: String,
        required: [true, "Please provide an answer"]
    },
    like: {
        type: Number,
        default: 0
    },
    _user: {                                             //OneToManyWithUser
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "User not in session"]
    },
    _question: {                                         //OneToManyWithQuestion
        type: mongoose.Schema.Types.ObjectId,
        ref: "Question",
        required: [true, "User not in session"]
    }
}, {timestamps: true});

mongoose.model("Answer", AnswerSchema);
var Answer = mongoose.model("Answer");