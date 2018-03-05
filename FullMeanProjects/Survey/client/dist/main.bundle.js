webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var poll_list_component_1 = __webpack_require__("../../../../../src/app/poll-list/poll-list.component.ts");
var poll_new_component_1 = __webpack_require__("../../../../../src/app/poll-new/poll-new.component.ts");
var poll_show_component_1 = __webpack_require__("../../../../../src/app/poll-show/poll-show.component.ts");
var routes = [
    {
        path: '',
        pathMatch: 'full',
        component: login_component_1.LoginComponent
    },
    {
        path: 'dashboard',
        component: poll_list_component_1.PollListComponent
    },
    {
        path: 'create',
        component: poll_new_component_1.PollNewComponent
    },
    {
        path: 'poll/:id',
        component: poll_show_component_1.PollShowComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var forms_1 = __webpack_require__("../../../forms/esm5/forms.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user.service.ts");
var poll_service_1 = __webpack_require__("../../../../../src/app/poll.service.ts");
var option_service_1 = __webpack_require__("../../../../../src/app/option.service.ts");
var app_routing_module_1 = __webpack_require__("../../../../../src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("../../../../../src/app/app.component.ts");
var login_component_1 = __webpack_require__("../../../../../src/app/login/login.component.ts");
var poll_list_component_1 = __webpack_require__("../../../../../src/app/poll-list/poll-list.component.ts");
var poll_new_component_1 = __webpack_require__("../../../../../src/app/poll-new/poll-new.component.ts");
var poll_show_component_1 = __webpack_require__("../../../../../src/app/poll-show/poll-show.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                poll_list_component_1.PollListComponent,
                poll_new_component_1.PollNewComponent,
                poll_show_component_1.PollShowComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.FormsModule,
                http_1.HttpModule
            ],
            providers: [
                user_service_1.UserService,
                poll_service_1.PollService,
                option_service_1.OptionService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".error {\n    color: red;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <form (submit)=\"createUser()\">\n    <div>\n      <label>Your name:</label>\n      <input type=\"text\" name=\"name\" [(ngModel)]=\"newUser.name\">\n    </div>\n    <div>\n      <input type=\"submit\" value=\"Login\">\n    </div>\n  </form>\n  <div>\n    <p class=\"error\" *ngFor= \"let error of errors\">{{ error }}</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_1 = __webpack_require__("../../../../../src/app/user.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, _userService) {
        this._router = _router;
        this._userService = _userService;
        this.newUser = new user_1.User();
        this.errors = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.createUser = function () {
        var _this = this;
        this.errors = [];
        this._userService.create(this.newUser, function (user) {
            if (user.errors) {
                for (var _i = 0, _a = Object.keys(user.errors); _i < _a.length; _i++) {
                    var key = _a[_i];
                    var error = user.errors[key];
                    _this.errors.push(error.message);
                }
            }
            else {
                _this._router.navigateByUrl('/dashboard');
            }
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [router_1.Router,
            user_service_1.UserService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "../../../../../src/app/new-poll.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var NewPoll = /** @class */ (function () {
    function NewPoll() {
        this.option1 = { option: '' };
        this.option2 = { option: '' };
        this.option3 = { option: '' };
        this.option4 = { option: '' };
    }
    return NewPoll;
}());
exports.NewPoll = NewPoll;


/***/ }),

/***/ "../../../../../src/app/option.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var OptionService = /** @class */ (function () {
    function OptionService(_http) {
        this._http = _http;
    }
    OptionService.prototype.update = function (id, callback) {
        this._http.put("options/" + id + "/easy", {}).subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    OptionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], OptionService);
    return OptionService;
}());
exports.OptionService = OptionService;


/***/ }),

/***/ "../../../../../src/app/poll-list/poll-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".float-right{\n    float: right;\n    margin: 1em;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/poll-list/poll-list.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Dashboard</h3>\n<div>\n  <button (click)=\"logout()\" class=\"float-right\">Logout</button>\n  <button [routerLink]= \"['/create']\" class=\"float-right\">Add a new poll</button>\n</div>\n\n\n<!-- {{ polls | json}} -->\n\n\n<h2>Current Polls</h2>\n<table border=\"1px\">\n  <tr>\n    <th>User</th>\n    <th>Question</th>\n    <th>Date Posted</th>\n    <th>Actions</th>\n  </tr>\n  <tr *ngFor=\"let poll of polls\">\n    <td>{{ poll.user.name }}</td>\n    <td><a href [routerLink]=\"['/poll', poll._id]\">{{ poll.question }}</a></td>\n    <td>{{ poll.createdAt | date: \"short\" }}</td>\n    <td><button (click)=\"destroyPoll(poll._id)\" *ngIf=\"currentUser._id === poll.user._id\">Delete</button></td>\n  </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/poll-list/poll-list.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_1 = __webpack_require__("../../../../../src/app/user.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user.service.ts");
var poll_service_1 = __webpack_require__("../../../../../src/app/poll.service.ts");
var PollListComponent = /** @class */ (function () {
    function PollListComponent(_userService, _router, _pollService) {
        this._userService = _userService;
        this._router = _router;
        this._pollService = _pollService;
        this.currentUser = new user_1.User();
    }
    PollListComponent.prototype.ngOnInit = function () {
        this.setCurrentUser(); //      Gets users in session
        this.getPolls(); //      Gets polls
        console.log("my polls", this.polls);
    };
    PollListComponent.prototype.destroyPoll = function (id) {
        var _this = this;
        this._pollService.delete(id, function (res) {
            if (res.status === true) {
                _this.getPolls();
            }
        });
    };
    PollListComponent.prototype.setCurrentUser = function () {
        this.currentUser = this._userService.getCurrentUser(); // currentUser is set to equal the getCurrentUser method in the User Service 
        if (this.currentUser === null) {
            this._router.navigateByUrl('/'); // Route whoever is looking at the site to the home ('/') route
        }
    };
    PollListComponent.prototype.getPolls = function () {
        var _this = this;
        console.log(this.polls);
        this._pollService.index(function (polls) { return _this.polls = polls; });
    };
    PollListComponent.prototype.logout = function () {
        var _this = this;
        this._userService.logout(function (res) { return _this._router.navigateByUrl('/'); });
    };
    PollListComponent = __decorate([
        core_1.Component({
            selector: 'app-poll-list',
            template: __webpack_require__("../../../../../src/app/poll-list/poll-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/poll-list/poll-list.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            router_1.Router,
            poll_service_1.PollService])
    ], PollListComponent);
    return PollListComponent;
}());
exports.PollListComponent = PollListComponent;


/***/ }),

/***/ "../../../../../src/app/poll-new/poll-new.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/poll-new/poll-new.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n    <button [routerLink]=\"['/dashboard']\">Cancel</button>\n  </div>\n  <div>\n    <h3>Please input your question and options here:</h3>\n  </div>\n  <div>\n    <form (submit)=\"createPoll()\">\n      <div>\n        <label>Question</label>\n        <input type=\"text\" name=\"question\" [(ngModel)]=\"newPoll.question\">\n      </div>\n      <div>\n        <label>Option 1</label>\n        <input type=\"text\" name=\"option1\" [(ngModel)]=\"newPoll.option1.option\">\n      </div>\n      <div>\n        <label>Option 2</label>\n        <input type=\"text\" name=\"option2\" [(ngModel)]=\"newPoll.option2.option\">\n      </div>\n      <div>\n        <label>Option 3</label>\n        <input type=\"text\" name=\"option3\" [(ngModel)]=\"newPoll.option3.option\">\n      </div>\n      <div>\n        <label>Option 4</label>\n        <input type=\"text\" name=\"option4\" [(ngModel)]=\"newPoll.option4.option\">\n      </div>\n      <div>\n        <input type=\"submit\" name=\"submit\">\n      </div>\n      <div>\n        <p class=\"error\" *ngFor=\"let error of errors\">{{error}}</p>\n      </div>\n    </form>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/poll-new/poll-new.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var new_poll_1 = __webpack_require__("../../../../../src/app/new-poll.ts");
var poll_service_1 = __webpack_require__("../../../../../src/app/poll.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_1 = __webpack_require__("../../../../../src/app/user.ts");
var user_service_1 = __webpack_require__("../../../../../src/app/user.service.ts");
var PollNewComponent = /** @class */ (function () {
    function PollNewComponent(_pollService, _router, _userService) {
        this._pollService = _pollService;
        this._router = _router;
        this._userService = _userService;
        this.newPoll = new new_poll_1.NewPoll();
        this.errors = [];
        this.currentUser = new user_1.User();
    }
    PollNewComponent.prototype.ngOnInit = function () {
        this.setCurrentUser; // Keeps/Puts a user in session
    };
    PollNewComponent.prototype.setCurrentUser = function () {
        this.currentUser = this._userService.getCurrentUser(); // currentUser is set to equal the getCurrentUser method in the User Service 
        if (this.currentUser === null) {
            this._router.navigateByUrl('/'); // Route whoever is looking at the site to the home ('/') route
        }
    };
    PollNewComponent.prototype.createPoll = function () {
        var _this = this;
        this.errors = [];
        if (this.newPoll.option1.option.length < 3 ||
            this.newPoll.option2.option.length < 3 ||
            this.newPoll.option3.option.length < 3 ||
            this.newPoll.option4.option.length < 3) {
            this.errors.push('Options must be at least three characters.');
        }
        this._pollService.create(this.newPoll, function (poll) {
            if (poll.errors) {
                for (var _i = 0, _a = Object.keys(poll.errors); _i < _a.length; _i++) {
                    var key = _a[_i];
                    var error = poll.errors[key];
                    _this.errors.push(error.message);
                }
            }
            else {
                _this._router.navigateByUrl('/dashboard');
            }
        });
    };
    PollNewComponent = __decorate([
        core_1.Component({
            selector: 'app-poll-new',
            template: __webpack_require__("../../../../../src/app/poll-new/poll-new.component.html"),
            styles: [__webpack_require__("../../../../../src/app/poll-new/poll-new.component.css")]
        }),
        __metadata("design:paramtypes", [poll_service_1.PollService,
            router_1.Router,
            user_service_1.UserService])
    ], PollNewComponent);
    return PollNewComponent;
}());
exports.PollNewComponent = PollNewComponent;


/***/ }),

/***/ "../../../../../src/app/poll-show/poll-show.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/poll-show/poll-show.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\n  <button [routerLink]=\"['/dashboard']\">Go to Polls</button>\n</div>\n\n<h2>{{ poll.question }}</h2>\n<p>Click the Vote button to choose one</p>\n<table border=\"1px\">\n  <tr>\n    <th>Option</th>\n    <th>Votes</th>\n    <th>Action</th>\n  </tr>\n  <tr *ngFor=\"let option of poll.options\">\n    <td>{{ option.option }}</td>\n    <td>{{ option.vote }}</td>\n    <td><button (click)=\"update(option._id)\">Vote</button></td>\n  </tr>\n</table>"

/***/ }),

/***/ "../../../../../src/app/poll-show/poll-show.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var user_service_1 = __webpack_require__("../../../../../src/app/user.service.ts");
var poll_service_1 = __webpack_require__("../../../../../src/app/poll.service.ts");
var router_1 = __webpack_require__("../../../router/esm5/router.js");
var user_1 = __webpack_require__("../../../../../src/app/user.ts");
var poll_1 = __webpack_require__("../../../../../src/app/poll.ts");
var option_service_1 = __webpack_require__("../../../../../src/app/option.service.ts");
var PollShowComponent = /** @class */ (function () {
    function PollShowComponent(_userService, _pollService, _optionService, _route, _router) {
        this._userService = _userService;
        this._pollService = _pollService;
        this._optionService = _optionService;
        this._route = _route;
        this._router = _router;
        this.poll = new poll_1.Poll(); // Instantiate the poll for it to receive likes
        this.currentUser = new user_1.User();
    }
    PollShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.setCurrentUser();
        this.subscription = this._route.params.subscribe(function (params) { return _this.poll_id = params.id; });
        // console.log(this.poll_id);
        this.getPoll();
    };
    PollShowComponent.prototype.ngOnDestroy = function () {
        this.subscription.unsubscribe();
    };
    PollShowComponent.prototype.setCurrentUser = function () {
        this.currentUser = this._userService.getCurrentUser(); // currentUser is set to equal the getCurrentUser method in the User Service 
        if (this.currentUser === null) {
            this._router.navigateByUrl('/'); // Route whoever is looking at the site to the home ('/') route
        }
    };
    PollShowComponent.prototype.getPoll = function () {
        var _this = this;
        this._pollService.show(this.poll_id, function (poll) { return _this.poll = poll; });
    };
    PollShowComponent.prototype.update = function (option_id) {
        var _this = this;
        this._optionService.update(option_id, function (res) { return _this.getPoll(); });
    };
    PollShowComponent = __decorate([
        core_1.Component({
            selector: 'app-poll-show',
            template: __webpack_require__("../../../../../src/app/poll-show/poll-show.component.html"),
            styles: [__webpack_require__("../../../../../src/app/poll-show/poll-show.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            poll_service_1.PollService,
            option_service_1.OptionService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], PollShowComponent);
    return PollShowComponent;
}());
exports.PollShowComponent = PollShowComponent;


/***/ }),

/***/ "../../../../../src/app/poll.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var PollService = /** @class */ (function () {
    function PollService(_http) {
        this._http = _http;
    }
    PollService.prototype.index = function (callback) {
        this._http.get('/polls').subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    PollService.prototype.create = function (newPoll, callback) {
        this._http.post('/polls', newPoll).subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    PollService.prototype.show = function (id, callback) {
        this._http.get("/polls/" + id).subscribe(// get poll by id 
        function (// get poll by id 
            res) { return callback(res.json()); }, // send back the data
        function (// send back the data
            err) { return console.log(err); });
    };
    PollService.prototype.delete = function (id, callback) {
        this._http.delete("/polls/" + id).subscribe(// get poll by id 
        function (// get poll by id 
            res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    PollService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], PollService);
    return PollService;
}());
exports.PollService = PollService;


/***/ }),

/***/ "../../../../../src/app/poll.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Poll = /** @class */ (function () {
    function Poll() {
    }
    return Poll;
}());
exports.Poll = Poll;


/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var http_1 = __webpack_require__("../../../http/esm5/http.js");
var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
        this.currentUser = null;
    }
    UserService.prototype.getCurrentUser = function () {
        return this.currentUser; //
    };
    UserService.prototype.create = function (newUser, callback) {
        var _this = this;
        this._http.post('/users', newUser).subscribe(function (res) {
            var user = res.json();
            if (!user.errors) {
                _this.currentUser = user;
            }
            callback(user);
        }, function (err) { return console.log(err); });
    };
    UserService.prototype.logout = function (callback) {
        this._http.delete('/users').subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    UserService.prototype.session = function (callback) {
        this._http.get('/session').subscribe(function (res) { return callback(res.json()); }, function (err) { return console.log(err); });
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "../../../../../src/app/user.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
exports.User = User;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map