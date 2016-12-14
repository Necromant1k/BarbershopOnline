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
var core_1 = require('@angular/core');
var saloon_service_1 = require('../../services/saloon/saloon.service');
var SaloonComponent = (function () {
    function SaloonComponent(_saloonService, _compiler) {
        this._saloonService = _saloonService;
        this._compiler = _compiler;
        this.saloons = [];
        this._compiler.clearCache();
    }
    SaloonComponent.prototype.ngOnInit = function () {
        this._getAll();
    };
    SaloonComponent.prototype._getAll = function () {
        var _this = this;
        this._saloonService.getAll()
            .subscribe(function (saloon) {
            _this.saloons = saloon;
        });
    };
    SaloonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'saloon',
            templateUrl: 'saloon.component.html'
        }), 
        __metadata('design:paramtypes', [saloon_service_1.SaloonService, core_1.Compiler])
    ], SaloonComponent);
    return SaloonComponent;
}());
exports.SaloonComponent = SaloonComponent;
