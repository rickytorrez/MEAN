var Player      = require("../controller/playerController.js");
var path        = require("path");

module.exports  = function(app){
    app.get("/players", Player.show);
    app.get("/players/:id", Player.showOne);
    app.post("/players", Player.create);
    app.put('/players/:id', Player.update);
    app.delete('/players/remove/:id', Player.destroy);

    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./client/dist/index.html'));
    })
}