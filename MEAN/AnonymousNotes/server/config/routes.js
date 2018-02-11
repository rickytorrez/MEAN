var path = require('path');

module.exports = (app) => {
    // Server routes are plural
        // notes
    // angular routes are singular
        // note
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
}