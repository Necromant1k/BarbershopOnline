"use strict";
var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    services: [
        {
            name: {
                type: String,
                required: true
            },
            price: {
                required: true,
                type: Number
            },
            discount: {
                size: {
                    type: Number,
                    required: true
                },
                name: {
                    type: String,
                    required: true,
                }
            }
        }
    ]
});
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = schema;
