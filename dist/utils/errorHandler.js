"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const httpClientErrors_1 = require("./httpClientErrors");
const http404Errors_1 = require("../utils/http404Errors");
const logger_config_1 = __importDefault(require("../config/logger.config"));
class ErrorHandler {
    notFoundError() {
        throw new http404Errors_1.HTTP404Error('Method not found.');
    }
    clientError(err, res, next) {
        if (err instanceof httpClientErrors_1.HTTPClientError) {
            logger_config_1.default.warn('clientError => ', err);
            res.status(err.statusCode).send(err.message);
        }
        else {
            next(err);
        }
    }
    serverError(err, res, _next) {
        // tslint:disable-next-line:no-console
        console.log(err);
        logger_config_1.default.error('serverError => ', err);
        if (err.status) {
            res.status(err.status).send(err);
        }
        else if (process.env.NODE_ENV === 'production') {
            res.status(500).send('Internal Server Error');
        }
        else {
            res.status(500).send(err.stack);
        }
    }
}
exports.default = new ErrorHandler();
//# sourceMappingURL=errorHandler.js.map