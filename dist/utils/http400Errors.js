"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP400Error = void 0;
const httpClientErrors_1 = require("./httpClientErrors");
class HTTP400Error extends httpClientErrors_1.HTTPClientError {
    constructor(message = 'Bad Request') {
        super(message);
        this.statusCode = 400;
    }
}
exports.HTTP400Error = HTTP400Error;
//# sourceMappingURL=http400Errors.js.map