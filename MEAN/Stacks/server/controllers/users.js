const mongoose  = require('mongoose');
const User      = mongoose.model('User');
const bcrypt    = require('bcryptjs');

class UsersController {
    create( req, res ){
        User.find({ email: req.body.email }, (err, users) => {
            // console.log(users);
            if(users.length == 0){
                User.create(req.body, (err, user) => {
                    if (err) {
                        return res.json(err);
                    }
                    req.session.user_id = user._id;
                    return res.json(user); 
                })
            }else {
                return res.json ({
                    error: "Email is already in use"
                })
            }
        })
    }

    authenticate(req, res) {
        console.log(req.body.password);
        User.findOne({ email: req.body.email }, (err, user) => {
            console.log(user);
            if (err) {
                return res.json(err);
            }

            if (User.schema.methods.authenticate(req.body.password, user.password)) {
                req.session.user_id = user._id;

                return res.json(user);
            }
            return res.json({
                errors: {
                    login: {
                        message: 'Invalid credentials'
                    }
                }
            });
        });
    }

    session( req, res ){
        if(req.session.user_id){
            User.findById(req.session.user_id, (err, user) => {
                return res.json(user);
            })
        }else{
            return res.json({
                "status": false
            })
        }
    }
    
    logout( req, res ){
        delete req.session.user_id;
        return res.json({ status: true })
    }

    show( req, res ){
        User.find({}, (err, users) => {
            if(err){
                return res.json(err);
            }
            return res.json(users)
        })
    }

}

module.exports = new UsersController();