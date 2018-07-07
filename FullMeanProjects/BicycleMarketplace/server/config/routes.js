let ListingController = require("../controllers/ListingController.js")
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

    // Route to create a listing
    app.post("/api/listings",           ListingController.create);
    // Route to get all the listings
    app.get("/api/listings",            ListingController.all);
    // Route to find a listing by its id
    app.get("/api/listings/:id",        ListingController.findById);
    // Route to update a listing by its id
    app.put("/api/listings/:id",        ListingController.update);
    // Route to delete a listing by its id
    app.delete("/api/listings/:id",     ListingController.destroy);
}