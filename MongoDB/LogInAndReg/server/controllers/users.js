const mongoose  = require('mongoose');
const bcrypt    = require('bcryptjs');
const User      = mongoose.model('User');

class UsersController {
    create(req, res){
        req.body.password = bcrypt.hashSync(req.body.password, bcrypt.genSaltSync(10));
        User.create(req.body, (err, user) => {
            
        })
        return res.json(req.body);
    }
}

module.exports = new UsersController();