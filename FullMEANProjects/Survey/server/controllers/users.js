var mongoose = require("mongoose");
var User = mongoose.model("User");

class UsersController {
    create(req,res){                                            //CREATE is creating if user does not exist AND log in if user exists
        User.findOne({ name: req.body.name }, (err, user) => {
            if(err) {                                           //catch server failure
                return res.json(err);
            }
            else if(!user){                                     //if input name doesnt match database
                User.create(req.body, (err, newUser) => {       //create a new a user
                    if(err){                                    //if new user doesnt meet requirement,
                        return res.json(err);                   //then return error
                    }
                    req.session.user_id = newUser._id;          //putting new user in session
                    return res.json(newUser);                   //a new user is made here if no error
                })
            } else {
                req.session.user_id = user._id;                 //putting user in session
                return res.json(user);                                 //user is logged in if name is in db
            }
        })
    }
    logout(req,res) {
        delete req.session.user_id;
        return res.json({ status: true })
    }
    session(req, res) {
        if(!req.session.user_id) {
            return res.json({status: false})
        }
        User.findById(req.session.user_id, (err, user)=>{
            if(err) {
                return res.json(err);
            }
            return res.json(user);
        })
    }
}

module.exports = new UsersController();