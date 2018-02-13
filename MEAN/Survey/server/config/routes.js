const Users         = require('../controllers/users');
const Polls         = require('../controllers/polls');
const Options       = require('../controllers/option');

module.exports      = function(app){
    app.post('/users', Users.create);
    app.delete('/users', Users.logout);
    app.get('/session', Users.session);

    app.post('/polls', Polls.create);
    app.get('/polls', Polls.index);
    app.get('/polls/:id', Polls.show);
    app.delete('/polls/:id', Polls.delete);

    app.get('/options/:id', Options.show);
    app.put('/options/:id', Options.update);
}