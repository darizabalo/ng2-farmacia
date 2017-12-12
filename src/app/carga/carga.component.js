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
var forms_1 = require("@angular/forms");
var carga_service_1 = require("./carga.service");
var CargaComponent = (function () {
    function CargaComponent(fb, cargaService) {
        this.fb = fb;
        this.cargaService = cargaService;
        this.createForms();
    }
    CargaComponent.prototype.createForms = function () {
        this.productoForm = this.fb.group({
            producto: '',
        });
        this.codBarraForm = this.fb.group({
            codBarra: '',
        });
        this.codigoForm = this.fb.group({
            codigo: '',
        });
    };
    CargaComponent.prototype.buscarProducto = function () {
        var _this = this;
        var formModel = this.productoForm.value;
        this.cargaService.buscarProducto(formModel.producto).subscribe(function (data) {
            _this.productos = data;
        });
    };
    CargaComponent.prototype.buscarCodBarra = function () {
    };
    CargaComponent.prototype.buscarCodigo = function () {
    };
    return CargaComponent;
}());
CargaComponent = __decorate([
    core_1.Component({
        templateUrl: './carga.component.html',
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, carga_service_1.CargaService])
], CargaComponent);
exports.CargaComponent = CargaComponent;
//# sourceMappingURL=carga.component.js.map