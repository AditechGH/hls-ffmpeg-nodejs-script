"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const database_config_1 = __importDefault(require("./config/database.config"));
const app_config_1 = __importDefault(require("./config/app.config"));
const logger_config_1 = __importDefault(require("./config/logger.config"));
const modules_1 = __importDefault(require("./modules"));
const utils_1 = require("./utils");
const middleware_1 = __importDefault(require("./middleware"));
const errorHandlers_1 = __importDefault(require("./middleware/errorHandlers"));
database_config_1.default.connect();
const constants = app_config_1.default.constants;
const router = express_1.default();
utils_1.applyMiddleware(middleware_1.default, router);
utils_1.applyRoutes(modules_1.default, router);
utils_1.applyMiddleware(errorHandlers_1.default, router);
process.on('uncaughtException', (e) => {
    logger_config_1.default.error(`uncaughtException => `, e);
    process.exit(1);
});
process.on('unhandledRejection', (e) => {
    logger_config_1.default.error(`unhandledRejection => `, e);
    process.exit(1);
});
http_1.default.createServer(router).listen(constants.HTTP_PORT, () => {
    logger_config_1.default.info(`http running on port: ${constants.HTTP_PORT} - Running on ${constants.ENV}`);
});
//# sourceMappingURL=server.js.map