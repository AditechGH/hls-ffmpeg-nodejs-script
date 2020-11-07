"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.stream = void 0;
const winston_1 = require("winston");
const winston_daily_rotate_file_1 = __importDefault(require("winston-daily-rotate-file"));
const app_config_1 = __importDefault(require("./app.config"));
const constants = app_config_1.default.constants;
const logger = winston_1.loggers.add('customLogger', {
    level: constants.ENV === 'production' ? 'info' : 'debug',
    format: winston_1.format.combine(winston_1.format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }), winston_1.format.metadata({ fillExcept: ['timestamp', 'message', 'level', 'label'] })),
    transports: [
        new winston_1.transports.Console({
            level: 'debug',
            format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`)),
            silent: constants.ENV === 'test',
        }),
        new winston_daily_rotate_file_1.default({
            filename: './logs/custom-%DATE%.log',
            datePattern: 'YYYY-MM-DD',
            level: 'info',
            handleExceptions: true,
            format: winston_1.format.combine(winston_1.format.json()),
        }),
    ],
    exitOnError: false,
});
exports.stream = {
    write: (message) => {
        logger.info(message);
    },
};
exports.default = logger;
//# sourceMappingURL=logger.config.js.map