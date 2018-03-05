var Note        = require("../controllers/notes.js");
var path        = require("path");

module.exports  = function(app){
    app.post("/notes", Note.create);
    app.get("/notes", Note.display);
    app.get("/notes/:id", Note.displayOne);
}