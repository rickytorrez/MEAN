const Users     = require('../controllers/users');
const Question  = require('../controllers/question');
const Answer    = require('../controllers/answer');
const path      = require('path');

module.exports = function(app){
    /********** USERS **********/
    app.post    ('/users',                  Users.create);
    app.post    ('/login',                  Users.authenticate);
    app.delete  ('/users',                  Users.logout);
    app.get     ('/session',                Users.session);
    app.get     ('/users',                  Users.show);

    /********** QUESTIONS **********/  
    app.post    ('/question/new',           Question.create);
    app.get     ('/question',               Question.showAll);
    app.get     ('/question/:id',           Question.showOne);

    /********** ANSWER **********/
    app.post    ('/answer/:question_id',    Answer.createAnswer);
    app.get     ('/answer/:id',             Answer.showAnswer);
    app.post    ('/answer/like/:answer_id', Answer.likeAnswer);

    app.all('*', ( req,res, next ) =>{
        res.sendFile(path.resolve('./client/dist/index.html'));
    });
}