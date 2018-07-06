let User    = require("mongoose").model("User");
let Listing = require("mongoose").model("Listing");
let bcrypt  = require("bcrypt");

class UserController {

    register(req, res){

        // if email exists, change the email
        User.findOne({email:req.body.email}, (err, user)=>{
            
            // if user exists, return 404
            if(user){
                return res.status(403).json({
                    message: "A user with this e-mail already exists.",
                    errors: errs
                });
            } else {
                
                // bcrypt the password input by user
                bcrypt.hash(req.body.password, 8, function (err, hash){
                    if(err){
                        return res.status(403).json({
                            message: "Failed to hash password!",
                            errors: err
                        })
                    } else {
                        
                        //set your password to the new hash password
                        user.password = hash;
                        
                        // if user with email doesn't exist, we'll let you create a user if no errors
                        user.save(errs=>{
                        
                        // if any errors on validation
                        if(errs){
                            return res.status(403).json({
                                message: "Failed to save user!",
                                errors: errs
                            });
                        
                        // We need to return a response to the front end
                        } else {
                            
                            // before user is saved, store it in session
                            req.session.uid = user._id;
                            return res.status(200).json(user);
                        }
                    });
                }
            });    
            }
        });
    }

    login(req, res){
        
        // finds user by email
        User.findOne({email:req.body.email}, (err,user)=>{
            if(user){
                
                // compares user input password to password saved in the db
                bcrypt.compare(req.body.password, user.password, function(err,result){
                    
                    // if the passwords match, send the whole user back
                    if(result){
                        
                        // before it returns the whole user, it throws it into session
                        req.session.uid = user._id;
                        return res.status(200).json(user);
                    
                        // if the passwords don't match, send an error response
                    } else {
                        return res.status(403).json({
                            message: "Invalid Credentials!",
                            errors: err
                        });
                    }
                });
            } else {
                
                // if the email doesn't exist, send an error response
                return res.status(403).json({
                    message: "No user with this email was found.",
                    errors: err
                });
            }
        });
    }

    logout(req, res){
        
        // set session to undefined instead of null
        req.session.uid = undefined;
        return res.status(200).json({
            message: "Logged out succesfully.",
        })
    }

    findById(req, res){
        
        // find by the user id
        User.findOne({_id:req.params.id})
        
        // look for all the listings by this one person we're looking for
        // populate needs to be passed two things, the model that it should look into and the attribute you want to populate on set model
        .populate({
            
            // path is the attribute name
            path:"listings",
            
            // the model is the model that join refers to
            model:"Listing"
        })
        .exec((err, user)=>{
            if(user){
                
                // if everything went well, return the user object
                return res.status(200).json(user);
            } else {
                
                // return the error plus user id
                return res.status(404).json({
                    message: "Failed to populate listings for user: " + user._id,
                    errors: err
                });
            }
        });
    }
}

module.exports = new UserController();