
var Users = require("../controllers/users")
var Polls = require("../controllers/polls")
var Options = require("../controllers/options")
var path = require('path')

module.exports = function(app){
    app.post("/users", Users.create);
    app.delete("/users", Users.logout);
    app.get("/session", Users.session);
    
    app.post('/polls', Polls.create);
    app.get('/polls', Polls.index)
    app.get('/polls/:id', Polls.show)
    app.delete('/polls/:id', Polls.destroy);

    app.get('/options/:id', Options.show);

    app.put('/options/:id/easy', Options.updateEasy);

    app.all('*', (req, res, next)=>{
        res.sendFile(path.resolve('./client/dist/index.html'));
    })
}
