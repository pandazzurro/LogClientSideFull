import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { RouterModule, Routes } from '@angular/router';

import { AlertModule } from 'ng2-bootstrap';
import { DataTableModule } from "angular2-serverpagination-datatable";

import { AppComponent } from './app.component';
import { ApplicationInsightComponent } from './application-insight/application-insight.component';
import { JSNlogComponent } from './jsnlog/jsnlog.component';
import { UserComponent } from './user/user.component';

import { JSLoggerService } from './jslogger.service';
import { ProductService} from './product.service';
import { ProductServiceApplicationInsight} from './product-application-insight.service';
import { UserService } from './user.service';
import { HttpSpinnerComponent } from './http-spinner/http-spinner.component';

import { FileDropDirective, FileUploader } from 'ng2-file-upload';


const appRoutes: Routes = [
  { path: 'application-insight', component: ApplicationInsightComponent },
  { path: 'jsnlog', component: JSNlogComponent },
  { path: 'user', component: UserComponent},
  { path: '', component: UserComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ApplicationInsightComponent,
    JSNlogComponent,
    HttpSpinnerComponent,
    FileDropDirective,
    UserComponent
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
  providers: [JSLoggerService, ProductService, UserService, ProductServiceApplicationInsight],
  bootstrap: [AppComponent]
})
export class AppModule { }