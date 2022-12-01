import { InjectQueue } from '@nestjs/bull';
import { Controller, Post } from '@nestjs/common';
import { Queue } from 'bull';

@Controller('audio')
export class AudioController {
  constructor(@InjectQueue('audio') private readonly audioQueue: Queue) {}

  @Post('transcode')
  async transcode() {
    console.log('send to queue');
    await this.audioQueue.add(
      'transcode',
      {
        file: 'audio.mp3',
      },
      { delay: 1000 },
    );
  }

  @Post('start')
  async play() {
    await this.audioQueue.resume();
  }
}
