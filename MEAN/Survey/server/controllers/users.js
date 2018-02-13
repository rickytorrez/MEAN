const mongoose      = require('mongoose');
const User          = mongoose.model('User');

class UsersController {
    create(req, res){
    // Find one user
        User.findOne({ name: req.body.name }, (err, user) => {
    // server failure "if statement"
            if (err){
                return res.json(err)
            }
    // if user not in database, create user
            else if (!user) {
                User.create(req.body, (err, newUser) =>{
    // not valid create throw error
                    if(err){
                        return res.json(err);
                    }
                    req.session.user_id = newUser._id;
                    return res.json(newUser);
                })
    // if found in databse, return user
            } else {
                req.session.user_id = user._id;
                return res.json(user);
            }
        })
    }

    logout(req, res){
        delete req.session.user_id;
        return res.json({status: true});
    }

    session(req, res){
        if(!req.session.user_id){
            return res.json({status: false})
        }
        User.findById(req.session.user_id, (err, user) => {
            if (err){
                return res.json(err);
            }
            return res.json(user);
        })
    }
}

module.exports      = new UsersController();