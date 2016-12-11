"use strict";
var router_1 = require('@angular/router');
var auth_guard_1 = require("./oauth/auth.guard");
var todo_cmp_1 = require("./todo/components/todo-cmp");
var profile_component_1 = require("./components/profile/profile.component");
var saloon_component_1 = require("./components/saloon/saloon.component");
var saloonSingle_component_1 = require('./components/single.saloon/saloonSingle.component');
var appRoutes = [
    {
        path: '',
        component: saloon_component_1.SaloonComponent
    },
    {
        path: 'test',
        component: todo_cmp_1.TodoCmp
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent,
        canActivate: [auth_guard_1.AuthGuard]
    },
    {
        path: 'saloon/:id',
        component: saloonSingle_component_1.SingleSaloonComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
