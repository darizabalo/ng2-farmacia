"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var common_1 = require("@angular/common");
var carga_component_1 = require("./carga.component");
var carga_service_1 = require("./carga.service");
var CargaModule = (function () {
    function CargaModule() {
    }
    return CargaModule;
}());
CargaModule = __decorate([
    core_1.NgModule({
        imports: [
            forms_1.ReactiveFormsModule,
            common_1.CommonModule,
        ],
        declarations: [
            carga_component_1.CargaComponent,
        ],
        providers: [
            carga_service_1.CargaService,
        ]
    })
], CargaModule);
exports.CargaModule = CargaModule;
//# sourceMappingURL=carga.module.js.map