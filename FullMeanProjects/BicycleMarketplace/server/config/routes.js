// let ListingController = require("../controllers/ListingController.js")
let UserController  = require("../controllers/UserController.js");


module.exports      = function(app){

    /* USER CONTROLLER */

    // Route to register
    app.post("/api/users/register",     UserController.register);
    // Route to login
    app.post("/api/users/login",        UserController.login);
    // Route to logout
    app.get("/api/users/logout",        UserController.logout);
    // Route to find by id and populate listings of each user
    app.get("/api/users/:id",           UserController.findById);

    /* LISTING CONTROLLER */
}