const mongoose  = require('mongoose');
const Poll      = mongoose.model('Poll');
const User      = mongoose.model('User');
const Option    = mongoose.model('Option');

class PollsController {
    index(req, res){
        Poll.find({}).populate({path: 'user', model:'User'}).exec((err, polls)=>{
            if(err){
                return res.json(err);
            }
            return res.json(polls);
        })
    }
    destroy(req, res){
        Poll.findById(req.params.id, (err, poll)=>{
            if(err){
                return res.json(err);
            }
            if(!poll){
                return res.json({ status: 'poll not found'})
            }
            else if(poll.user == req.session.user_id){
                poll.remove();
                return res.json({ status: true });
            } else{
                return res.josn({ status: 'access dined' })
            }
        })
    }
    show(req, res){
        Poll.findById(req.params.id).populate({ path: 'options', model:'Option'}).exec((err, poll)=>{
            if(err){
                return res.json(err);
            }
            return res.json(poll);
        })
    }
    create(req, res) {
        Poll.create({ question: req.body.question, user: req.session.user_id }, (err, poll) => {
            if(err){
                return res.json(err);
            }

            req.body.option1.poll = poll._id;
            Option.create(req.body.option1, (err, option1) => {
                if(err){
                    return res.json(err);
                }
                req.body.option2.poll = poll._id;
                Option.create(req.body.option2, (err, option2) => {
                    if(err){
                        return res.json(err);
                    }
                    req.body.option3.poll = poll._id;
                    Option.create(req.body.option3, (err, option3) => {
                        if(err){
                            return res.json(err);
                        }
                        req.body.option4.poll = poll._id;
                        Option.create(req.body.option4, (err, option4) => {
                            if(err){
                                return res.json(err);
                            }
                            poll.options.push(option1._id);
                            poll.options.push(option2._id);
                            poll.options.push(option3._id);
                            poll.options.push(option4._id);
                            poll.save((err, poll) => {
                                if(err){
                                    return res.json(err);
                                }
                                return res.json(poll);
                            })
                        })
                    })
                })
            })
        })
    }
}


module.exports  = new PollsController();