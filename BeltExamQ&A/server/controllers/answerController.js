var mongoose        = require("mongoose");
var Answer          = mongoose.model("Answer");
var Question        = mongoose.model("Question");
var User            = mongoose.model("User");

class AnswerController {
    createAnswer(req, res){
        console.log("THIS IS AT EST")
        Question.findById(req.params.question_id, (err, question)=>{
            var answer = new Answer(req.body);
            console.log(req.body,"ANSWER CONTENT SHOULD BE HERE");
            answer._user = req.session.user_id;
            answer._question = req.params.question_id;
            console.log(question,"QUESTION SHOULD BE HERE");
            question._answer.push(answer);
            answer.save((err)=>{
                question.save((err)=>{
                    if(err){
                        return res.json(err);
                    }
                    return res.json(answer)
                })
            })
        })
    }

    showAnswer(req, res){
        Answer.find({})
        .populate({path: "user", model:"User"})
        .populate({path: "question", model: "Question"})
        .exec((err, answers)=>{
            if(err){
                return res.json(err);
            }
            return res.json(answers)
        })
    }

    likeAnswer(req, res){
        Answer.findById(req.params.answer_id, (err, answer)=>{
            if(err){
                res.json(err);
            }
            console.log("nailed it" + answer)
            answer.like ++;
            answer.save((err)=>{
                if(err){
                    res.json(err);
                }
                return res.json(answer);
            })
        })
    }


}

module.exports = new AnswerController();