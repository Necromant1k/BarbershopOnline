"use strict";
var todo_routes_1 = require('../api/todo/routes/todo-routes');
var saloon_routes_1 = require('../api/saloon/routes/saloon.routes');
var index_1 = require('../commons/static/index');
var Routes = (function () {
    function Routes() {
    }
    Routes.init = function (app, router) {
        todo_routes_1.TodoRoutes.init(router);
        saloon_routes_1.SaloonRoutes.init(router);
        router
            .route('*')
            .get(index_1.StaticDispatcher.sendIndex);
        app.use('/', router);
    };
    return Routes;
}());
exports.Routes = Routes;
