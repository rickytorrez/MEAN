var User        = require('../controllers/userController');
var Question    = require('../controllers/questionController');
var Answer      = require('../controllers/answerController');
var path        = require('path');

module.exports  = function(app){

    /********** USER **********/ 
    app.post    ("/user",                   User.create);
    app.get     ("/session",                User.session);
    app.delete  ("/user",                   User.logout);

    /********** QUESTIONS **********/  
    app.post    ('/question/new',           Question.create);
    app.get     ('/question',               Question.showAll);
    app.get     ('/question/:id',           Question.showOne);

    /********** ANSWER **********/
    app.post    ('/answer/:question_id',    Answer.createAnswer);
    app.get     ('/answer/:id',             Answer.showAnswer);
    app.put     ('/answer/like/:answer_id', Answer.likeAnswer);


    app.all('*', ( req,res, next ) =>{
        res.sendFile(path.resolve('./client/dist/index.html'));
    });
}