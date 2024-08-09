import { CheckService } from "../domain/use-cases/check-service";
import { CronService } from "./cron/cron-service";


export class ServerApp {

    public static start (){
        console.log('Server started..');
        
        CronService.cronJob(
            '*/5 * * * * *',
            () => {
                const url = 'https://google.com';
                new CheckService(
                    () => console.log( `${ url } is Ok`),
                    ( error ) => console.log( error )       
                ).execute( url );
                
            }
        ); 
    }

}