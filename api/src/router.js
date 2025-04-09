"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var repos_controller_1 = require("./repos/repos.controller");
var languages_controller_1 = require("./languages/languages.controller");
var router = express_1.default.Router();
// Route en API REST Verb HTTP + uri (/api/repos/12)
// GET, POST, PUT, PATCH DELETE
// http://localhost:3000/api/repos
router.get("/", function (_, res) {
    res.status(200).send("Tout est OK");
});
router.use("/repos", repos_controller_1.default);
router.use("/languages", languages_controller_1.default);
exports.default = router;
