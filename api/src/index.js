"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
require("dotenv/config");
var cors_1 = require("cors");
var router_1 = require("./router");
var app = (0, express_1.default)();
var port = process.env.EXPRESS_SERVER_PORT || 3000;
// gestion des cors
app.use((0, cors_1.default)({
    origin: process.env.CLIENT_URL,
}));
// Active le décodage du body au format JSON
app.use(express_1.default.json());
app.use("/api", router_1.default);
app.listen(port, function () {
    console.info("You server is running on http://localhost:".concat(port));
});
