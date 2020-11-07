"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const errorHandler_1 = __importDefault(require("../utils/errorHandler"));
class ErrorHandlers {
    handle404Error(router) {
        router.use((req, res) => {
            errorHandler_1.default.notFoundError();
        });
    }
    handleClientError(router) {
        router.use((err, req, res, next) => {
            errorHandler_1.default.clientError(err, res, next);
        });
    }
    handleServerError(router) {
        router.use((err, req, res, next) => {
            errorHandler_1.default.serverError(err, res, next);
        });
    }
}
exports.default = [
    new ErrorHandlers().handle404Error,
    new ErrorHandlers().handleClientError,
    new ErrorHandlers().handleServerError,
];
//# sourceMappingURL=errorHandlers.js.map