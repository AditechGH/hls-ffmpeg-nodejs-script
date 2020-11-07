"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HTTP404Error = void 0;
const httpClientErrors_1 = require("./httpClientErrors");
class HTTP404Error extends httpClientErrors_1.HTTPClientError {
    constructor(message = 'Not found') {
        super(message);
        this.statusCode = 404;
    }
}
exports.HTTP404Error = HTTP404Error;
//# sourceMappingURL=http404Errors.js.map