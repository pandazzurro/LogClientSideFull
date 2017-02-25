var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from '@angular/core';
import { JL } from 'jsnlog';
var JSLoggerService = (function () {
    function JSLoggerService() {
        this.logger = JL();
    }
    JSLoggerService.prototype.coreDebug = function (msg) {
        this.logger.debug(msg);
    };
    JSLoggerService.prototype.coreInfo = function (msg) {
        this.logger.info(msg);
    };
    JSLoggerService.prototype.coreError = function (msg) {
        this.logger.error(msg);
    };
    return JSLoggerService;
}());
JSLoggerService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [])
], JSLoggerService);
export { JSLoggerService };
//# sourceMappingURL=E:/Progetti/GitHub/LogClientSideFull/LogClientSide/src/app/jslogger.service.js.map