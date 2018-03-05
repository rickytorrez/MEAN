const Users = require('../controllers/users');
const path  = require('path');

module.exports = function(app){
    app.post    ('/users',      Users.create);
    app.post    ('/login',      Users.authenticate);
    app.delete  ('/users',      Users.logout);
    app.get     ('/session',    Users.session);
    app.get     ('/users',      Users.show);

    app.all('*', ( req,res, next ) =>{
        res.sendFile(path.resolve('./client/dist/index.html'));
    });
}