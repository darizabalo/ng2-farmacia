"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var app_component_1 = require("./app.component");
var side_nav_component_1 = require("./side-nav.component");
var not_found_component_1 = require("./not-found.component");
var app_routing_module_1 = require("./app-routing.module");
var users_module_1 = require("./users/users.module");
var carga_module_1 = require("./carga/carga.module");
var users_service_1 = require("./users/users.service");
var auth_guard_service_1 = require("./auth-guard.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            users_module_1.UsersModule,
            carga_module_1.CargaModule,
            app_routing_module_1.AppRoutingModule,
        ],
        declarations: [
            app_component_1.AppComponent,
            side_nav_component_1.SideNavComponent,
            not_found_component_1.PageNotFoundComponent,
        ],
        providers: [
            users_service_1.UsersService, auth_guard_service_1.AuthGuard,
        ],
        bootstrap: [app_component_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map