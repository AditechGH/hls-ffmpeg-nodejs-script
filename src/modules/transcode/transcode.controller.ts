// tslint:disable:no-console
import { spawn } from 'child_process';
import fs from 'fs';
import { Request, Response, NextFunction } from 'express';

export class TranscodeController {
  /**
   * transcode
   */
  public async transcode(req: Request, res: Response) {
    const videoFile = 'public/video/tos-teaser.mp4';
    const scriptFile = 'public/script/hls.sh';
    const destination = 'public/stream';
    
    const createHLSVOD = spawn('bash', [scriptFile, videoFile, destination]);
    createHLSVOD.stdout.on('data', d => console.log(`stdout info: ${d}`));
    createHLSVOD.stderr.on('data', d => console.log(`${d}`));
    createHLSVOD.on('error', d => console.log(`error: ${d}`));
    createHLSVOD.on('close', code => console.log(`child process ended with code ${code}`));
    res.send('success');
  }

}
