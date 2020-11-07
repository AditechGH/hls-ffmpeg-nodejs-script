"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const logger_config_1 = __importDefault(require("./logger.config"));
const app_config_1 = __importDefault(require("./app.config"));
const constants = app_config_1.default.constants;
mongoose_1.default.Promise = global.Promise;
class Database {
    /**
     * connect
     */
    connect() {
        if (mongoose_1.default.connection.readyState === 0) {
            mongoose_1.default.connect(constants.database, {
                useNewUrlParser: true,
                useCreateIndex: true,
                useFindAndModify: false,
                useUnifiedTopology: true,
            });
            mongoose_1.default.connection.on('connected', this.connected);
            mongoose_1.default.connection.on('error', this.error);
            process.on('SIGINT', () => {
                mongoose_1.default.connection.close(this.close);
            });
        }
    }
    /**
     * disconnect
     */
    disconnect() {
        if (mongoose_1.default.connection.readyState !== 0) {
            mongoose_1.default.disconnect();
        }
    }
    connected() {
        logger_config_1.default.info(`Successfully connected  to mongoDB on: ${constants.database}`);
    }
    error(error) {
        logger_config_1.default.error(`Database Error: ${error.message}`, error);
    }
    close() {
        logger_config_1.default.info(`Mongoose default connection is disconnected due to application termination`);
        process.exit(0);
    }
}
exports.default = new Database();
//# sourceMappingURL=database.config.js.map