"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = __importDefault(require("./common"));
const middleWares = [
    common_1.default.corsMiddleware,
    common_1.default.bodyRequestParsingMiddleware,
    common_1.default.morganMiddleware
];
if (process.env.NODE_ENV === 'production') {
    middleWares.push(common_1.default.compressionMiddleware);
    middleWares.push(common_1.default.helmetMiddleware);
}
exports.default = middleWares;
//# sourceMappingURL=index.js.map