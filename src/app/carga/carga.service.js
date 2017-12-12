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
var Producto = (function () {
    function Producto() {
    }
    return Producto;
}());
exports.Producto = Producto;
var CargaService = (function () {
    function CargaService(http) {
        this.http = http;
        this.productoUrl = 'http://localhost:80/farmacia/src/app/php/buscarproducto.php';
    }
    CargaService.prototype.buscarProducto = function (value) {
        var body = { producto: value };
        console.log(body);
        return this.http.post(this.productoUrl, body);
        //return this.http.get<Producto[]>(this.productoUrl);
    };
    return CargaService;
}());
CargaService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.HttpClient])
], CargaService);
exports.CargaService = CargaService;
//# sourceMappingURL=carga.service.js.map