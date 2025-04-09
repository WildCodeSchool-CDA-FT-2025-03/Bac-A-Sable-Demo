"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var data_json_1 = require("../../data.json");
var languages = express_1.default.Router();
var cache = {};
languages.get("/", function (req, res) {
    if (!cache.languages) {
        var languages_1 = data_json_1.default.reduce(function (acc, repo) {
            repo.languages.forEach(function (lg) {
                if (!acc.includes(lg.node.name)) {
                    acc.push(lg.node.name);
                }
                return acc;
            });
            return acc;
        }, []);
        cache.languages = languages_1;
    }
    res.status(200).json(cache.languages);
});
exports.default = languages;
