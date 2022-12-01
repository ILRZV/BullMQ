import { OnQueueActive, Process, Processor } from '@nestjs/bull';
import { Logger } from '@nestjs/common';
import { Job } from 'bull';

@Processor('audio')
export class AudioProcessor {
  private readonly logger = new Logger(AudioProcessor.name);

  @OnQueueActive()
  onActive(job: Job) {
    console.log(
      `Processing job ${job.id} of type ${job.name} with data ${job.data}...`,
    );
  }

  @Process('transcode')
  async handleTranscode(job: Job) {
    let progress = 0;
    console.log('Processing');
    for (let i = 0; i < 100; i++) {
      progress += 1;
      await job.progress(progress);
    }
    return {};
  }
}
