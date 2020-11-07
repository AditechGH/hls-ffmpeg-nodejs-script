"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redis_1 = require("redis");
const logger_config_1 = __importDefault(require("./logger.config"));
const app_config_1 = __importDefault(require("./app.config"));
const constants = app_config_1.default.constants;
class Cache {
    constructor() {
        this.client = redis_1.createClient(constants.REDIS_PORT, constants.REDIS_HOST);
        this.client.on('connect', this.connected);
        this.client.on('error', this.error);
    }
    connected() {
        logger_config_1.default.info(`Successfully connected to Redis on: ${constants.REDIS_HOST}:${constants.REDIS_PORT}`);
    }
    error(error) {
        logger_config_1.default.error(`Error in Redis client: ${error.message}`, error);
    }
}
exports.default = new Cache();
//# sourceMappingURL=cache.config.js.map