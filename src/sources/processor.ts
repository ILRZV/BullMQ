import { Job, DoneCallback } from 'bull';
console.log('initialized');
export default function (job: Job, cb: DoneCallback) {
  console.log(`[${process.pid}] ${JSON.stringify(job.data)}`);
  cb(null, 'It works');
}
