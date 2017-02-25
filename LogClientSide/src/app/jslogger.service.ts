import { Injectable } from '@angular/core';
import { JL } from 'jsnlog';

@Injectable()
export class JSLoggerService
{
    logger: JL.JSNLogLogger;

    constructor()
    {
        this.logger = JL();
    }

    coreDebug(msg: string) {
		this.logger.debug(msg);
    }

    coreInfo(msg: string) {
		this.logger.info(msg);
    }

    coreError(msg: string) {
		this.logger.error(msg);
    }	
}