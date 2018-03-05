var mongoose        = require("mongoose");
var Question        = mongoose.model("Question");
var Answer          = mongoose.model("Answer");
var User            = mongoose.model("User");

class QuestionController {
    create(req, res){
        console.log(req.session.user_id);
        Question.create({ question: req.body.question, _user: req.session.user_id  }, (err, question) => {
            if(err){
                return res.json(err);
            }
            return res.json(question);
        })
    }

    showAll(req, res){
        Question.find({}, (err, questions)=>{
            return res.json(questions);
        })
    }

    showOne(req, res){
        Question.findById(req.params.id)
        .populate({ path:"_user", model: "User"})
        .populate({ path: "_answer", model: "Answer"})
        .exec((err, question) => {
            if(err){
                return res.json({"error": "Not nailing it @ the Question controller"})
            }
            return res.json(question);
        })
    }
}

module.exports = new QuestionController();