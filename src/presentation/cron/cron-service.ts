import { CronJob } from 'cron';

type Crontime = string | Date;
type Ontick = () => void;

export class CronService {

    static cronJob ( cronTime: Crontime, ontick: Ontick ): CronJob {

        const job = new CronJob( cronTime, ontick);
        job.start();
        return job;

    }
}