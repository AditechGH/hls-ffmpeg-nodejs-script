"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const helmet_1 = __importDefault(require("helmet"));
const morgan_1 = __importDefault(require("morgan"));
const compression_1 = __importDefault(require("compression"));
const logger_config_1 = require("../config/logger.config");
class App {
    helmetMiddleware(router) {
        router.use(helmet_1.default());
    }
    morganMiddleware(router) {
        router.use(morgan_1.default('combined', { stream: logger_config_1.stream }));
    }
    compressionMiddleware(router) {
        router.use(compression_1.default());
    }
    corsMiddleware(router) {
        router.use(cors_1.default({ credentials: true, origin: true }));
    }
    bodyRequestParsingMiddleware(router) {
        router.use(body_parser_1.default.urlencoded({ extended: true }));
        router.use(body_parser_1.default.json());
    }
}
exports.default = new App();
//# sourceMappingURL=common.js.map