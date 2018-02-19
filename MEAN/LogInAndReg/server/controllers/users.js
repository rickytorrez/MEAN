const mongoose  = require('mongoose');
const User      = mongoose.model('User');
const bcrypt    = require('bcryptjs');

class UsersController {
    create( req, res ){
        if(req.body.password != req.body.passwordConfirmation){
            return res.json({
                errors: {
                    password: {
                        message: "Your passwords do not match!"
                    }
                }
            })
        }
        User.create(req.body, (err, user) => {
            if (err) {
                return res.json(err);
            }
            req.session.user_id = user._id;
            return res.json(user); 
        })
    }

    authenticate( req, res ){
        if(req.body.email == "" || req.body.password == ""){
            return res.json({"error": "not nailing it bitch"})
        } 
        User.findOne({ email: req.body.email }, (err, user) => {
            if(user == null){
                return res.json({"error": "invalid email"});
            } else {
                if (user && user.authenticate(req.body.password)){
                    req.session.user_id = user_id;
                    return res.json({ "status": "login success" });
                } else {
                    return res.json({ "status": "invalid password"});
                }
            }
        });
    }





        //     if (err) {
        //         return res.json(err);
        //     }
        //     if( user && user.authenticate(req.body.password)){
        //         req.session.user_id = user._id;
        //         return res.json(user);
        //     }
        //     return res.json({
        //         errors: {
        //             login: {
        //                 message: "Invalid credentials"
        //             }
        //         }
        //     });


    session( req, res ){
        if(req.session.user_id){
            return res.json({ status: true });
        }
        User.findById(req.session.user_id, (err, user) => {
            if (err){
                return res.json(err);
            }
            return res.json(user);
        })
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