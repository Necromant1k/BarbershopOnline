"use strict";
var saloon_controller_1 = require('../controller/saloon.controller');
var SaloonRoutes = (function () {
    function SaloonRoutes() {
    }
    SaloonRoutes.init = function (router) {
        router
            .route('/api/saloons')
            .get(saloon_controller_1.SaloonController.getAll);
        router
            .route('/api/saloons/:id')
            .get(saloon_controller_1.SaloonController.getSaloon);
    };
    return SaloonRoutes;
}());
exports.SaloonRoutes = SaloonRoutes;
