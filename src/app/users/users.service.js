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
var core_1 = require("@angular/core");
var http_1 = require("@angular/common/http");
var Subject_1 = require("rxjs/Subject");
var User = (function () {
    function User() {
    }
    return User;
}());
exports.User = User;
var UsersService = (function () {
    function UsersService(http) {
        this.http = http;
        this.usersUrl = 'http://localhost:80/farmacia/src/app/php/getusers.php';
        this.user = new Subject_1.Subject();
        this.user$ = this.user.asObservable();
        this.isLoggedIn = false;
    }
    UsersService.prototype.getUsers = function () {
        return this.http.get(this.usersUrl);
    };
    //Currently not used
    UsersService.prototype.getUser = function (id) {
        var url = this.usersUrl + "?id=" + id;
        return this.http.get(url);
    };
    UsersService.prototype.setCurrentUser = function (user) {
        this.user.next(user);
        this.isLoggedIn = true;
    };
    return UsersService;
}());
UsersService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map