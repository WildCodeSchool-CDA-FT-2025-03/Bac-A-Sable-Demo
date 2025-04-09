"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var repos_validation_1 = require("./repos.validation");
var data_json_1 = require("../../data.json"); // const data = []
var logger_1 = require("../services/logger");
var repos = express_1.default.Router();
var reposState = data_json_1.default;
/**
 * Route GET pour récupérer tous mes repos
 *  /api/repos
 */
repos.get("/", function (req, res) {
    console.log("Hit all repo controller");
    console.log(req.query);
    // Select * from repos where isPrivate = ?, [req.query.isPrivate]
    var result = req.query.isPrivate
        ? reposState.filter(function (rep) { return rep.isPrivate.toString() === req.query.isPrivate; })
        : reposState;
    if (req.query.limit && result.length > +req.query.limit) {
        result = result.slice(0, +req.query.limit);
    }
    if (req.query.fields) {
        var fields_1 = typeof req.query.fields === "string" ? req.query.fields.split(",") : [];
        // Retourner un tableau
        // Pour chaque élément, ne garder que les clés voulues
        result = result.map(function (el) {
            // map retourne un tableau [res, res, res, res]
            var res = fields_1.reduce(function (acc, field) {
                var _a;
                return (__assign(__assign({}, acc), (_a = {}, _a[field] = el[field], _a)));
            }, // { ...acc }
            {}); // Methode de tableau qui retourne accumulateur (string, number, object, array)
            return res; // { fields[0]: ..., fields[1]: ...]}
        });
    }
    res.status(200).json(result);
});
/**
Tour 1
acc = {}, field = "id" => { "id": "dejenzencor" }

Tour 2
acc = { "id": "dejenzencor" }, field = "url" => { "id": "dejenzencor", "url": "http://..."}
*/
/**
 * Route Get pour récupérer un repos via son id
 * /api/repos/dujen_deodei
 */
repos.get("/:reposid", function (req, res) {
    var repo = reposState.find(function (rep) { return rep.id === req.params.reposid; });
    if (repo) {
        res.status(200).json(repo);
    }
    else {
        res.sendStatus(404);
    }
});
repos.post("/", repos_validation_1.validateRepo, function (req, res) {
    var newId = Math.ceil(Math.random() * 100000).toString();
    reposState.push(__assign(__assign({}, req.body), { id: newId }));
    res.status(201).json({ id: newId });
});
repos.delete("/:reposId", function (req, res) {
    // Req.params.id => 455
    if (reposState.some(function (repo) { return repo.id === req.params.id; })) {
        reposState = reposState.filter(function (repo) { return repo.id !== req.params.reposId; });
        res.sendStatus(204);
    }
    else {
        // console.log({
        //   error: { msg: `Route delete, id not found, ${req.params.reposId}` },
        // });
        logger_1.default.error({
            error: { msg: "Route delete, id not found, ".concat(req.params.reposId) },
        });
        res.sendStatus(404);
    }
});
/*** Sécurité métiers */
exports.default = repos;
