const Users         = require('../controllers/users');
const Polls         = require('../controllers/polls');

module.exports      = function(app){
    app.post('/users', Users.create);
    app.delete('/users', Users.logout);
    app.get('/session', Users.session);
    
    app.post('/polls', Polls.create);
}