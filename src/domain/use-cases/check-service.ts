interface CheckServiceUseCase {
    execute( url: string ): Promise<boolean>;
}

type SuccessCallback = () => void;
type ErrorCallBack = ( error: string) => void;

export class CheckService implements CheckServiceUseCase {

    constructor (
        private readonly successCallback: SuccessCallback,
        private readonly errorCallback: ErrorCallBack
    ) {}

    async execute ( url: string ): Promise<boolean> {

        try {
            const req = await fetch( url );
            if ( !req.ok ) {
                throw new Error( `Error on check ${ url }` );
            }
            
            this.successCallback();
            return true;
            
        } catch ( error ) {
            //console.log(`${ error }`);
            this.errorCallback( `${ error }`);
            return false;
        }
  
    }
    
}