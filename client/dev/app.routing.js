"use strict";
var router_1 = require('@angular/router');
var todo_cmp_1 = require("./todo/components/todo-cmp");
var profile_component_1 = require("./components/profile/profile.component");
var appRoutes = [
    {
        path: 'test',
        component: todo_cmp_1.TodoCmp
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
