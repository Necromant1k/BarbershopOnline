"use strict";
var mongoose = require('mongoose');
var Promise = require('bluebird');
var _ = require('lodash');
var saloon_model_1 = require('../model/saloon.model');
saloon_model_1.default.static('getAll', function () {
    return new Promise(function (resolve, reject) {
        var _query = {};
        Saloon.find(_query).exec(function (err, saloons) {
            err ? reject(err) : resolve(saloons);
        });
    });
});
saloon_model_1.default.static('getSaloon', function (id) {
    return new Promise(function (resolve, reject) {
        if (!_.isString(id)) {
            return reject(new TypeError('Id is not a valid string.'));
        }
        Saloon
            .findById(id)
            .exec(function (err, saloon) {
            err ? reject(err)
                : resolve(saloon);
        });
    });
});
var Saloon = mongoose.model('Saloon', saloon_model_1.default);
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = Saloon;
