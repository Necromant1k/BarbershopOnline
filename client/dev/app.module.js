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
var http_1 = require('@angular/http');
var forms_1 = require('@angular/forms');
var platform_browser_1 = require('@angular/platform-browser');
var material_1 = require('@angular/material');
var angular2_jwt_1 = require('angular2-jwt');
var app_routing_1 = require('./app.routing');
var auth_service_1 = require('./oauth/auth.service');
var auth_guard_1 = require('./oauth/auth.guard');
var app_component_1 = require('./app.component');
var todo_cmp_1 = require('./todo/components/todo-cmp');
var todo_service_1 = require('./todo/services/todo-service');
var navbar_component_1 = require("./components/navbar/navbar.component");
var profile_component_1 = require("./components/profile/profile.component");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.routing,
                forms_1.FormsModule,
                http_1.HttpModule,
                material_1.MaterialModule
            ],
            declarations: [
                app_component_1.AppComponent,
                todo_cmp_1.TodoCmp,
                navbar_component_1.NavbarComponent,
                profile_component_1.ProfileComponent
            ],
            providers: [
                todo_service_1.TodoService,
                angular2_jwt_1.AUTH_PROVIDERS,
                auth_service_1.Auth,
                auth_guard_1.AuthGuard
            ],
            bootstrap: [
                app_component_1.AppComponent
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
