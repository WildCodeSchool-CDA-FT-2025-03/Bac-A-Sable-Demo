"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
var toSCV = winston_1.format.printf(function (_a) {
    var timestamp = _a.timestamp, message = _a.message, level = _a.level;
    return "".concat(timestamp, ", ").concat(level, ", ").concat(JSON.stringify(message));
});
var loggerTransporter = [];
if (process.env.NODE_ENV !== "production") {
    // MOn system de log doit utiliser la console
    loggerTransporter.push(new winston_1.transports.Console({
        format: winston_1.format.json(),
    }));
}
else {
    // Mon systeme doit memoriser le log en fichier
    loggerTransporter.push(new winston_1.transports.File({
        filename: "log/error.log",
        level: "error",
        format: winston_1.format.combine(winston_1.format.timestamp(), toSCV),
    }));
}
var logger = (0, winston_1.createLogger)({
    level: "error",
    format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
    transports: loggerTransporter,
});
exports.default = logger;
