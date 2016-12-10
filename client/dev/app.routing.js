"use strict";
var router_1 = require('@angular/router');
var todo_cmp_1 = require("./todo/components/todo-cmp");
var appRoutes = [
    {
        path: 'test',
        component: todo_cmp_1.TodoCmp
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
