"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRepo = void 0;
var joi_1 = require("joi");
var logger_1 = require("../services/logger");
var schema = joi_1.default.object({
    url: joi_1.default.string().required(),
    isPrivate: joi_1.default.boolean().required(),
    languages: joi_1.default.array().items(joi_1.default.object({
        size: joi_1.default.number().required(),
        node: joi_1.default.object({
            name: joi_1.default.string(),
        }),
    })),
    name: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
});
var validateRepo = function (req, res, next) {
    var error = schema.validate(req.body).error;
    if (error) {
        logger_1.default.error({
            error: { msg: "Validation Repo, ".concat(error.details[0].message) },
        });
        res.status(422).json(error);
    }
    else {
        next();
    }
};
exports.validateRepo = validateRepo;
