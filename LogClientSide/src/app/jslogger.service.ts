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
    this.logger.debug(logObject);
  }

  Info(logObject: any) {
    this.logger.info(logObject);
  }

  Error(logObject: any) {
    this.logger.error(logObject);
  }
}