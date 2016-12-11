"use strict";
var saloon_service_1 = require('../service/saloon.service');
var SaloonController = (function () {
    function SaloonController() {
    }
    SaloonController.getAll = function (req, res) {
        saloon_service_1.default['getAll']()
            .then(function (saloons) { return res.status(200).json(saloons); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    SaloonController.getSaloon = function (req, res) {
        var _id = req.params.id;
        saloon_service_1.default['getSaloon'](_id)
            .then(function (saloons) { return res.status(200).json(saloons); })
            .catch(function (error) { return res.status(400).json(error); });
    };
    return SaloonController;
}());
exports.SaloonController = SaloonController;
