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
var router_1 = require('@angular/router');
var SingleSaloonComponent = (function () {
    function SingleSaloonComponent(_saloonService, _route) {
        this._saloonService = _saloonService;
        this._route = _route;
        this.saloon = [];
    }
    SingleSaloonComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._route.params.map(function (params) { return params['id']; })
            .subscribe(function (id) {
            _this._saloonService.getSaloon(id)
                .subscribe(function (saloon) {
                _this.saloon = saloon;
            });
        });
    };
    SingleSaloonComponent.prototype._getSaloon = function (id) {
        var _this = this;
        this._saloonService.getSaloon(id)
            .subscribe(function (saloon) {
            _this.saloon = saloon;
        });
    };
    SingleSaloonComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'single-saloon',
            templateUrl: 'saloonSingle.component.html'
        }), 
        __metadata('design:paramtypes', [saloon_service_1.SaloonService, router_1.ActivatedRoute])
    ], SingleSaloonComponent);
    return SingleSaloonComponent;
}());
exports.SingleSaloonComponent = SingleSaloonComponent;
