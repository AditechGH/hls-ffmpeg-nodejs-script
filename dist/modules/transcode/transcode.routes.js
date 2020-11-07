"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_config_1 = __importDefault(require("../../config/app.config"));
const transcode_controller_1 = require("./transcode.controller");
const transcodeController = new transcode_controller_1.TranscodeController();
const constants = app_config_1.default.constants;
const path = `${constants.BASE_URL}transcode`;
exports.default = [
    {
        path: `${path}`,
        method: 'post',
        handler: [transcodeController.transcode],
    }
];
//# sourceMappingURL=transcode.routes.js.map