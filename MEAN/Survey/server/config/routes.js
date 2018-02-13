const Users         = require('../controllers/users');

module.exports      = function(app){
    app.post('/users', Users.create);
    app.delete('/users', Users.logout);
    app.get('/session', Users.session);
}