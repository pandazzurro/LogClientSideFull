import { Injectable } from '@angular/core';
import { JL } from 'jsnlog';

@Injectable()
export class JSLoggerService {
  logger: JL.JSNLogLogger;

  constructor() {
    // Remap EndPoint
    this.logger = JL();
  }

  Debug(logObject: any) {
    if(typeof logObject != "string")
      logObject = JSON.stringify(logObject).replace(/"/g, "\\'");
    this.logger.debug(logObject);
  }

  Info(logObject: any) {
    if(typeof logObject != "string")
      logObject = JSON.stringify(logObject).replace(/"/g, "\\'");
    this.logger.info(logObject);
  }

  Error(logObject: any) {    
    if(typeof logObject != "string")
      logObject = JSON.stringify(logObject).replace(/"/g, "\\'");
    this.logger.error(logObject);
  }
}