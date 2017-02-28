import { Component, OnInit, OnDestroy } from '@angular/core';
/* import AppInsights */
import { AppInsights } from "applicationinsights-js";
import { MdSnackBar } from '@angular/material';
import { MdDialog } from '@angular/material';
import { ProductServiceApplicationInsight } from '../product-application-insight.service';
import { Product } from '../Models/Product';
import { PaginationData } from '../Models/PaginationData';
import { HttpSpinnerComponent } from '../http-spinner/http-spinner.component';
import { FileDropDirective, FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { UserService } from '../user.service';

@Component({
    selector: 'app-application-insight',
    templateUrl: './application-insight.component.html',
    styleUrls: ['./application-insight.component.css']
})
export class ApplicationInsightComponent implements OnInit, OnDestroy  {
    public products: PaginationData<Product> = new PaginationData<Product>(new Array<Product>() , 0);
    errorMessage: any;
    public rowsOnPage = 5;
    public activePage = 1;
    public startUpload : number;
    public stopUpload : number;
    public startPage : number;
    public stopPage : number;
    public counterException: number = 1;

    public uploader: FileUploader;
    public hasBaseDropZoneOver: boolean = false;
    public hasAnotherDropZoneOver: boolean = false;


    constructor(private _productService: ProductServiceApplicationInsight, private _userService: UserService, public snackBar: MdSnackBar, public dialog: MdDialog) {
        this.startPage = Date.now();
        AppInsights.downloadAndSetup({ instrumentationKey: "3e88c674-ebeb-468a-8435-bc768a67aa17" });
        this.uploader = new FileUploader({ url: "/api/upload", disableMultipart: false });
        this.uploader.onAfterAddingFile = this.onAfterAddingFile.bind(this);
        this.uploader.onBeforeUploadItem = this.onBeforeUploadItem.bind(this);
        this.uploader.onErrorItem = this.onErrorItem.bind(this);
        this.uploader.onCompleteItem = this.onCompleteItem.bind(this);        
    }

    ngOnInit() {
        this.stopPage = Date.now();
        AppInsights.startTrackPage("application-insight");
        AppInsights.trackPageView(
            "ApplicationInsightComponent", /*nome della pagina */
            "application-insight", /*url della pagina */
            { nomeFunzione: "pageView", nomeComponents: "ApplicationInsightComponent", user : JSON.stringify(this._userService) }, /* (optional) proprieta evento */
            { numeroEccezioniSessioneCorrente: this.counterException }, /* (optional) dizionario di metriche */
            this.stopPage - this.startPage          
        );

        //Per vederla subito su portale
        AppInsights.flush();
        this.snackBar.open("pageView", "pageView", { duration: this.stopPage - this.startPage });
    }

    ngOnDestroy(){
        AppInsights.stopTrackPage("application-insight");
    }
    

    public getProducts() {
        this.snackBar.open("Caricamento Dati", "Loading", { duration: 2000 });
        this.dialog.open(HttpSpinnerComponent);
        let startDate = Date.now();

        var skip: number = this.rowsOnPage * (this.activePage - 1);
        this._productService.getProducts(skip, this.rowsOnPage)
            .subscribe(
            products => {
                let stopDate = Date.now();
                this.products = products;                
                this.dialog.closeAll();
                let differenceDate = stopDate - startDate;
                
                // this.log.Debug({ 
                //     msg: "Caricamento dati in " + differenceDate + " ms" ,
                //     user : this._userService,                    
                //     userAgent : window.navigator.userAgent,
                //     route : window.location.pathname
                // });    
            },
            error => {
                this.errorMessage = <any>error;
                // this.log.Error(this.errorMessage);
            });
    }

    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
    }

    public onPageChange(event) {
        this.rowsOnPage = event.rowsOnPage;
        this.activePage = event.activePage;
        this.getProducts();
        
        // this.log.Info({ msg: "Caricamento pagina successiva", currentPage: this.activePage, user : this._userService});    
    }

    public onAfterAddingFile(fileItem: FileItem): void {
        this.snackBar.open("File" + fileItem.file.name + " aggiunto", "Ok", { duration: 2000 });
        
        // this.log.Debug({
        //     msg: "Adding File", 
        //     file: fileItem.file, 
        //     user : this._userService, 
        //     userAgent : window.navigator.userAgent,
        //     route : window.location.pathname                
        // });
    }
    public onBeforeUploadItem(fileItem: FileItem): void {
        this.snackBar.open("Il File" + fileItem.file.name + " si sta caricando", "Loading", { duration: 2000 });
        AppInsights.startTrackEvent(fileItem.file.name);
        
        // this.log.Debug({ 
        //     msg: "Before File", 
        //     file: fileItem.file, 
        //     user : this._userService,
        //     userAgent : window.navigator.userAgent,
        //     route : window.location.pathname    
        // });
        this.startUpload = Date.now();
    }
    public onCompleteItem(fileItem: FileItem): void {
        this.stopUpload = Date.now();
        this.snackBar.open("Caricamento completato", "Ok", { duration: 2000 });
        AppInsights.stopTrackPage(fileItem.file.name);
        // this.log.Debug({ 
        //     msg: "File caricato in " + (this.stopUpload - this.startUpload) + " ms", 
        //     file: fileItem.file, 
        //     user : this._userService,
        //     userAgent : window.navigator.userAgent,
        //     route : window.location.pathname
        //  });
    }
    public onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): void {
        this.snackBar.open("Il File" + item.file.name + " non è stato caricato", "Error", { duration: 2000 });
        // this.log.Error({ msg: "Error File", 
        //     file: item.file, 
        //     user : this._userService,
        //     userAgent : window.navigator.userAgent,
        //     route : window.location.pathname
        // });
    }

    public loadError() {
        // this.log.Error({ 
        //     msg: "Simulazione Errore", 
        //     user : this._userService,
        //     userAgent : window.navigator.userAgent,
        //     route : window.location.pathname
        // });
        this.snackBar.open("Simulazione Errore", "Errors", { duration: 2000 });

        this.dialog.open(HttpSpinnerComponent);

        var skip: number = this.rowsOnPage * (this.activePage - 1);
        this._productService.getProductsError()
            .subscribe(
            products => {
                this.products = products;                
                this.dialog.closeAll();
            },
            error => {
                this.errorMessage = <any>error;
                this.counterException += 1;
                AppInsights.trackException(new Error(this.errorMessage + this.counterException.toString()), null, null, null, AI.SeverityLevel.Error);
                this.dialog.closeAll();
            });
    }


    // counterException: number = 1;
    // constructor(public snackBar: MdSnackBar) {
    //     AppInsights.downloadAndSetup({ instrumentationKey: "3e88c674-ebeb-468a-8435-bc768a67aa17" });
    // }

    // ngOnInit() {
    //     this.pageView();
    // }

    // public pageView() {
    //     AppInsights.trackPageView(
    //         "ApplicationInsightComponent", /*nome della pagina */
    //         "application-insight", /*url della pagina */
    //         { nomeFunzione: "pageView", nomeComponents: "ApplicationInsightComponent" }, /* (optional) proprieta evento */
    //         { numeroEccezioniSessioneCorrente: this.counterException }, /* (optional) dizionario di metriche */
    //         2345 /* durata caricamento pagina in millisecondi */
    //     );

    //     //Per vederla subito su portale
    //     AppInsights.flush();

    //     this.snackBar.open("pageView", "pageView", { duration: 2000});
    // }

    // /// Inserisce una informazione di tracciatura
    // public sendTrace() {
    //     var proprietaTraccia : any = { nomeFunzione: "tracciaEvento", nomeComponents: "ApplicationInsightComponent" };
    //     AppInsights.trackTrace("Traccia", proprietaTraccia);


    //     //Per vederla subito su portale
    //     AppInsights.flush();

    //      this.snackBar.open("sendTrace", "sendTrace", { duration: 2000});
    // }

    // ///Inserisce un evento generico
    // public sendEvent() {
    //     AppInsights.trackEvent("Evento di test",
    //         { prop1: "prop1", prop2: "prop2" },
    //         { measurement1: 100 }
    //     );


    //     //Per vederla subito su portale
    //     AppInsights.flush();

    //     this.snackBar.open("sendEvent", "sendEvent", { duration: 2000});
    // }

    // ///Inserisce una eccezione
    // public sendException() {
    //     this.counterException = this.counterException + 1;
    //     AppInsights.startTrackEvent("Eccezione" + this.counterException);
    //     AppInsights.trackException(new Error("Messaggio di errore" + this.counterException ));
    //     AppInsights.stopTrackEvent("Eccezione" + this.counterException.toString(),
    //         { numeroEccezioniSessioneCorrente: this.counterException.toString() }
    //     );

    //     //Per vederla subito su portale
    //     AppInsights.flush();

    //     this.snackBar.open("sendException", "sendException", { duration: 2000});
    // }
}
