var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule } from '@angular/router';
import { AlertModule } from 'ng2-bootstrap';
import { DataTableModule } from "angular2-serverpagination-datatable";
import { AppComponent } from './app.component';
import { ApplicationInsightComponent } from './application-insight/application-insight.component';
import { JSNlogComponent } from './jsnlog/jsnlog.component';
import { JSLoggerService } from './jslogger.service';
import { ProductService } from './product.service';
import { HttpSpinnerComponent } from './http-spinner/http-spinner.component';
var appRoutes = [
    { path: 'application-insight', component: ApplicationInsightComponent },
    { path: 'jsnlog', component: JSNlogComponent }
];
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    NgModule({
        declarations: [
            AppComponent,
            ApplicationInsightComponent,
            JSNlogComponent,
            HttpSpinnerComponent
        ],
        entryComponents: [
            HttpSpinnerComponent
        ],
        imports: [
            BrowserModule,
            FormsModule,
            HttpModule,
            RouterModule.forRoot(appRoutes),
            AlertModule.forRoot(),
            DataTableModule,
            MaterialModule.forRoot()
        ],
        providers: [JSLoggerService, ProductService],
        bootstrap: [AppComponent]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=E:/Progetti/GitHub/LogClientSideFull/LogClientSide/src/app/app.module.js.map