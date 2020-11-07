"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TranscodeController = void 0;
// tslint:disable:no-console
const child_process_1 = require("child_process");
class TranscodeController {
    /**
     * transcode
     */
    transcode(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const videoFile = 'public/video/tos-teaser.mp4';
            const scriptFile = 'public/script/hls.sh';
            const destination = 'public/stream';
            const createHLSVOD = child_process_1.spawn('bash', [scriptFile, videoFile, destination]);
            createHLSVOD.stdout.on('data', d => console.log(`stdout info: ${d}`));
            createHLSVOD.stderr.on('data', d => console.log(`stderr error: ${d}`));
            createHLSVOD.on('error', d => console.log(`error: ${d}`));
            createHLSVOD.on('close', code => console.log(`child process ended with code ${code}`));
            res.send('success');
        });
    }
}
exports.TranscodeController = TranscodeController;
//# sourceMappingURL=transcode.controller.js.map