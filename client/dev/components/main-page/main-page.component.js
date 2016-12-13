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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var MainPageComponent = (function () {
    function MainPageComponent(document) {
        this.document = document;
    }
    MainPageComponent.prototype.onWindowScroll = function () {
        var element = this.document.getElementById('#main-content');
        var number = this.document.body.scrollTop;
        if (number > 20) {
            element.style.opacity = "0";
        }
        else if (number < 900) {
            element.style.opacity = "1";
        }
    };
    __decorate([
        core_1.HostListener("window:scroll", []), 
        __metadata('design:type', Function), 
        __metadata('design:paramtypes', []), 
        __metadata('design:returntype', void 0)
    ], MainPageComponent.prototype, "onWindowScroll", null);
    MainPageComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'main-page',
            templateUrl: 'main-page.component.html'
        }),
        __param(0, core_1.Inject(platform_browser_1.DOCUMENT)), 
        __metadata('design:paramtypes', [Document])
    ], MainPageComponent);
    return MainPageComponent;
}());
exports.MainPageComponent = MainPageComponent;
