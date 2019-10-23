(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"container\">\n<input type=\"checkbox\" [(ngModel)]=\"thecheckbox\" data-md-icheck (click)=\"tooggle($event)\">\\\n<span *ngIf=\"marked\">completed</span>\n</div> -->\n\n\n<!-- <h2>Checkbox list example</h2>\n\n<ul>\n\t<li *ngFor=\"let item of list\">\n    <input type=\"checkbox\" [(ngModel)]=\"item.checked\">{{item.title}}\n  </li>\n</ul> -->\n\n\n\n<!-- <pre>{{this.result | json}}</pre> -->\n\n\n<app-todo></app-todo>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/todo/todo-list/todo-list.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/todo/todo-list/todo-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n        <div class=\"col-md-12\">\n            <h1>User List</h1>\n            <table class=\"table table-bordered table-striped table-hover\">\n                <thead>\n                    <tr>\n                        <th class=\"text-center\">ID</th>\n                        <th class=\"text-center\">First Name</th>\n                        <th class=\"text-center\">Last Name</th>\n                        <th class=\"text-center\">&nbsp;</th>\n                        <th class=\"text-center\">&nbsp;</th>\n                    </tr>\n                </thead>\n                <tbody>\n                    <tr *ngFor=\"let user of users\">\n                        <td>{{ user.id }}</td>\n                        <td>{{ user.firstName }}</td>\n                        <td>{{ user.lastName }}</td>\n                        <div class=\"container\" >\n                                <input type=\"checkbox\" [(ngModel)]=\"thecheckbox\" data-md-icheck (click)=\"tooggle($event)\">\n                                <span *ngIf=\"marked\">completed</span>\n                                </div>\n    \n                        <td>\n                            <button class=\"btn btn-info mr-2\" (click)=\"showEditUserForm(user)\">\n                                Edit\n                            </button>\n                            <button class=\"btn btn-danger\" (click)=\"removeUser(user)\">\n                                X\n                            </button>\n                            \n                        </td>\n                        <td> \n                                <!-- <div class=\"container\">\n                                        <input type=\"checkbox\" [(ngModel)]=\"thecheckbox\" data-md-icheck (click)=\"tooggle($event)\">\n                                        <span *ngIf=\"marked\">completed</span>\n                                        </div> -->\n                        \n                           \n                            \n                        \n                        </td>\n                    </tr>\n                </tbody>\n            </table>\n    \n\n\n\n\n            <button class=\"btn btn-success\" (click)=\"showAddUserForm()\">+\n            </button>\n            <br />\n            <br />\n    \n            <form *ngIf=\"userForm\">\n                <h2>Add New User</h2>\n                <p>First Name: <input type=\"text\" name=\"firstName\" [(ngModel)]=\"newUser.firstName\" /></p>\n                <p>Last Name: <input type=\"text\" name=\"lastName\" [(ngModel)]=\"newUser.lastName\" /></p>\n                <p>\n                    <button type=\"button\" class=\"btn btn-primary mr-2\" (click)=\"saveUser(newUser)\">Submit</button>\n                    <button type=\"button\" class=\"btn btn-warning\" (click)=\"cancelNewUser()\">Cancel</button>\n                </p>\n            </form>\n    \n            <form *ngIf=\"editUserForm\">\n                <h2>Edit User Details</h2>\n                <p>First Name: <input type=\"text\" name=\"firstName\" [(ngModel)]=\"editedUser.firstName\" /></p>\n                <p>Last Name: <input type=\"text\" name=\"lastName\" [(ngModel)]=\"editedUser.lastName\" /></p>\n                <p>\n                    <button type=\"button\" class=\"btn btn-primary mr-2\" (click)=\"updateUser(editedUser)\">Submit</button>\n                    <button type=\"button\" class=\"btn btn-warning\" (click)=\"cancelEdits()\">Cancel</button>\n                </p>\n            </form>\n        </div>\n    </div>"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    ngOnInit() {
        this.list = [
            {
                id: 1,
                title: 'Администратор',
                checked: true,
            },
            {
                id: 2,
                title: 'Пользователь',
                checked: false,
            },
            {
                id: 3,
                title: 'Директор',
                checked: true,
            },
            {
                id: 4,
                title: 'Начальник',
                checked: false,
            },
        ];
    }
    get result() {
        return this.list.filter(item => item.checked);
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _todo_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./todo/todo-list/todo-list.component */ "./src/app/todo/todo-list/todo-list.component.ts");







let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _todo_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_6__["TodoListComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/todo/todo-list/todo-list.component.css":
/*!********************************************************!*\
  !*** ./src/app/todo/todo-list/todo-list.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RvZG8vdG9kby1saXN0L3RvZG8tbGlzdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/todo/todo-list/todo-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/todo/todo-list/todo-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _todoservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../todoservice.service */ "./src/app/todo/todoservice.service.ts");



let TodoListComponent = class TodoListComponent {
    constructor(userService) {
        this.userService = userService;
        this.userForm = false;
        this.newUser = {};
        this.editUserForm = false;
        this.editedUser = {};
        this.marked = false;
        this.thecheckbox = false;
    }
    tooggle(e) {
        this.marked = e.target.checked;
        //this.thecheckbox.addOrRemove(this.value);
    }
    ngOnInit() {
        this.users = this.getUsers();
    }
    getUsers() {
        return this.userService.getUsersFromData();
    }
    showEditUserForm(user) {
        if (!user) {
            this.userForm = false;
            return;
        }
        this.editUserForm = true;
        this.editedUser = user;
    }
    showAddUserForm() {
        // resets form if edited user
        if (this.users.length) {
            this.newUser = {};
        }
        this.userForm = true;
        this.isNewUser = true;
    }
    saveUser(user) {
        if (this.isNewUser) {
            //add a new user
            this.userService.addUser(user);
        }
        this.userForm = false;
    }
    updateUser() {
        this.userService.updateUser(this.editedUser);
        this.editUserForm = false;
        this.editedUser = {};
    }
    removeUser(user) {
        this.userService.deleteUser(user);
    }
    cancelEdits() {
        this.editedUser = {};
        this.editUserForm = false;
    }
    cancelNewUser() {
        this.newUser = {};
        this.userForm = false;
    }
    checkbox(v) {
        // this.check = this.userService.checksend();
        // console.log(this.check)
    }
};
TodoListComponent.ctorParameters = () => [
    { type: _todoservice_service__WEBPACK_IMPORTED_MODULE_2__["TodoserviceService"] }
];
TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-todo',
        template: __webpack_require__(/*! raw-loader!./todo-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/todo/todo-list/todo-list.component.html"),
        styles: [__webpack_require__(/*! ./todo-list.component.css */ "./src/app/todo/todo-list/todo-list.component.css")]
    })
], TodoListComponent);



/***/ }),

/***/ "./src/app/todo/todoservice.service.ts":
/*!*********************************************!*\
  !*** ./src/app/todo/todoservice.service.ts ***!
  \*********************************************/
/*! exports provided: TodoserviceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoserviceService", function() { return TodoserviceService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TodoserviceService = class TodoserviceService {
    constructor() {
        this.upersons = [
            {
                id: 1,
                firstName: 'Durgesh',
                lastName: 'Pal'
            },
            {
                id: 2,
                firstName: 'Ankur',
                lastName: 'Pal'
            }
        ];
    }
    getUsersFromData() {
        return this.upersons;
    }
    addUser(user) {
        user.id = this.upersons.length + 1;
        this.upersons.push(user);
    }
    updateUser(user) {
        let index = this.upersons.findIndex(u => user.id === u.id);
        this.upersons[index] = user;
    }
    deleteUser(user) {
        this.upersons.splice(this.upersons.indexOf(user), 1);
    }
};
TodoserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], TodoserviceService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\ladybird\test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map