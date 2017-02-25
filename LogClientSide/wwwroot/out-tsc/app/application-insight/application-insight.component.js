var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
/* import AppInsights */
import { AppInsights } from "applicationinsights-js";
import { MdSnackBar } from '@angular/material';
var ApplicationInsightComponent = (function () {
    function ApplicationInsightComponent(snackBar) {
        this.snackBar = snackBar;
        this.counterException = 1;
        /* Call downloadAndSetup to download full ApplicationInsights script from CDN and initialize it with instrumentation key */
        AppInsights.downloadAndSetup({ instrumentationKey: "3e88c674-ebeb-468a-8435-bc768a67aa17" });
    }
    ApplicationInsightComponent.prototype.ngOnInit = function () {
    };
    ///Inserisce l'evento di pagina visualizzata
    ApplicationInsightComponent.prototype.pageView = function () {
        AppInsights.trackPageView("Componente di esempio", /* (optional) nome della pagina */ null, /* (optional) url della pagina */ { nomeFunzione: "pageView", nomeComponents: "ApplicationInsightComponent" }, /* (optional) propriet� evento */ { numeroEccezioniSessioneCorrente: this.counterException }, /* (optional) dizionario di metriche */ 2345 /* durata caricamento pagina in millisecondi */);
        //Per vederla subito su portale
        AppInsights.flush();
        this.snackBar.open("pageView", "pageView", { duration: 2000 });
    };
    /// Inserisce una informazione di tracciatura
    ApplicationInsightComponent.prototype.sendTrace = function () {
        var proprietaTraccia = { nomeFunzione: "tracciaEvento", nomeComponents: "ApplicationInsightComponent" };
        AppInsights.trackTrace("Traccia", proprietaTraccia);
        //Per vederla subito su portale
        AppInsights.flush();
        this.snackBar.open("sendTrace", "sendTrace", { duration: 2000 });
    };
    ///Inserisce un evento generico
    ApplicationInsightComponent.prototype.sendEvent = function () {
        AppInsights.trackEvent("Evento di test", { prop1: "prop1", prop2: "prop2" }, { measurement1: 100 });
        //Per vederla subito su portale
        AppInsights.flush();
        this.snackBar.open("sendEvent", "sendEvent", { duration: 2000 });
    };
    ///Inserisce una eccezione
    ApplicationInsightComponent.prototype.sendException = function () {
        this.counterException = this.counterException + 1;
        AppInsights.startTrackEvent("Eccezione" + this.counterException);
        AppInsights.trackException(new Error("Messaggio di errore" + this.counterException));
        AppInsights.stopTrackEvent("Eccezione" + this.counterException.toString(), { numeroEccezioniSessioneCorrente: this.counterException.toString() });
        //Per vederla subito su portale
        AppInsights.flush();
        this.snackBar.open("sendException", "sendException", { duration: 2000 });
    };
    return ApplicationInsightComponent;
}());
ApplicationInsightComponent = __decorate([
    Component({
        selector: 'app-application-insight',
        templateUrl: './application-insight.component.html',
        styleUrls: ['./application-insight.component.css']
    }),
    __metadata("design:paramtypes", [MdSnackBar])
], ApplicationInsightComponent);
export { ApplicationInsightComponent };
//# sourceMappingURL=E:/Progetti/GitHub/LogClientSideFull/LogClientSide/src/app/application-insight/application-insight.component.js.map