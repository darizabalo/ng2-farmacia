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
var users_service_1 = require("./users/users.service");
var SideNavComponent = (function () {
    function SideNavComponent(usersService) {
        var _this = this;
        this.usersService = usersService;
        usersService.user$.subscribe(function (data) { return _this.user = data; });
    }
    SideNavComponent.prototype.ngOnInit = function () {
        this.getUsers();
    };
    SideNavComponent.prototype.getUsers = function () {
        var _this = this;
        this.usersService.getUsers().subscribe(function (data) {
            _this.users = data;
        });
    };
    SideNavComponent.prototype.setCurrentUser = function (user) {
        this.usersService.setCurrentUser(user);
    };
    return SideNavComponent;
}());
SideNavComponent = __decorate([
    core_1.Component({
        selector: 'app-side-nav',
        templateUrl: './side-nav.component.html',
        styleUrls: ['./side-nav.component.css']
    }),
    __metadata("design:paramtypes", [users_service_1.UsersService])
], SideNavComponent);
exports.SideNavComponent = SideNavComponent;
//# sourceMappingURL=side-nav.component.js.map