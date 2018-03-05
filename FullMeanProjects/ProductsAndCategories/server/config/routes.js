let UserController              = require("../controllers/UserController");
let ProductController           = require("../controllers/ProductController");
let CategoryController          = require("../controllers/CategoryController");
let ProductCategoryController   = require("../controllers/ProductCategoryController");
let path                        = require("path");

module.exports = function(app){
/*************** USERS ********************/
    app.post("/users/new", UserController.register);
    app.get("/session", UserController.session);

/*************** PRODUCTS ********************/
    app.get("/products", ProductController.all);
    app.post("/products/new", ProductController.create);

/*************** CATEGORIES ********************/
    app.get("/categories", CategoryController.all);
    app.post("/categories/new", CategoryController.create);

/*************** PRODUCTS AND CATEGORIES ********************/
/*************** MANY TO MANY JOIN ********************/
    app.get("/procats", ProductCategoryController.all);
    app.post("/procats/new", ProductCategoryController.create);
    
/*************** ANGULAR ********************/
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./client/dist/index.html"))
    });
}