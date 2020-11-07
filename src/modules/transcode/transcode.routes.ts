import config from '../../config/app.config';
import { TranscodeController } from './transcode.controller';

const transcodeController: TranscodeController = new TranscodeController();

const constants = config.constants;
const path: string = `${constants.BASE_URL}transcode`;

export default [
  {
    path: `${path}`,
    method: 'post',
    handler: [transcodeController.transcode],
  }
];
