import { Component, OnInit } from '@angular/core';
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
import { environment } from '../../environments/environment';

@Component({
    selector: 'app-application-insight',
    templateUrl: './application-insight.component.html',
    styleUrls: ['./application-insight.component.css']
})
export class ApplicationInsightComponent implements OnInit  {
    public products: PaginationData<Product> = new PaginationData<Product>(new Array<Product>() , 0);
    errorMessage: any;
    public rowsOnPage = 5;
    public activePage = 1;
    public startUpload : number;
    public stopUpload : number;
    public startPage : number;
    public stopPage : number;
    public counterException: number = 1;
    public loadProducts : number = 0;
    public loadErrors : number = 0;
    public loadFiles : number = 0;

    public uploader: FileUploader;
    public hasBaseDropZoneOver: boolean = false;
    public hasAnotherDropZoneOver: boolean = false;


    constructor(private _productService: ProductServiceApplicationInsight, private _userService: UserService, public dialog: MdDialog) {
        this.startPage = Date.now();
        let config = { instrumentationKey: environment.APPINSIGHTS_INSTRUMENTATIONKEY }
        AppInsights.downloadAndSetup(config);
        this.uploader = new FileUploader({ url: "/api/upload", disableMultipart: false });
        this.uploader.onAfterAddingFile = this.onAfterAddingFile.bind(this);
        this.uploader.onBeforeUploadItem = this.onBeforeUploadItem.bind(this);
        this.uploader.onErrorItem = this.onErrorItem.bind(this);
        this.uploader.onCompleteItem = this.onCompleteItem.bind(this);       

        
    }

    ngOnInit() {
        this.stopPage = Date.now();        
        let timeToLoad : number = (this.stopPage - this.startPage);    
        AppInsights.trackMetric("loadPageMetric", timeToLoad);
                
        AppInsights.startTrackPage("application-insight");
        AppInsights.trackPageView(
            "ApplicationInsightComponent", /*nome della pagina */
            "application-insight", /*url della pagina */
            { nomeFunzione: "pageView", nomeComponents: "ApplicationInsightComponent", user : JSON.stringify(this._userService) }, /* (optional) proprieta evento */
            { numeroEccezioniSessioneCorrente: this.counterException }, /* (optional) dizionario di metriche */
            this.stopPage - this.startPage          
        );
        AppInsights.setAuthenticatedUserContext(this._userService.Username);
        //Per vederla subito su portale
        AppInsights.flush();        
    }
    
    public getProducts() {
        AppInsights.startTrackEvent("CaricamentoProdotti");
        this.loadProducts +=1;

        AppInsights.trackMetric("loadProductData", 1, this.loadProducts, null, null, { "user" : JSON.stringify(this._userService) });
        
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
                AppInsights.trackEvent("loadProductDataEvent", 
                    { "user" : JSON.stringify(this._userService) }, 
                    { "duration" : differenceDate, "loadCounter" : this.loadProducts }
                );

                AppInsights.stopTrackEvent("CaricamentoProdotti");
            },
            error => {
                this.errorMessage = <any>error;                
                AppInsights.trackException(new Error(this.errorMessage));
                AppInsights.stopTrackEvent("CaricamentoProdotti");
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
        let currentDate = Date.now();
        this.getProducts();
        
        AppInsights.trackMetric("skipPage", this.activePage, 1, 0, this.products.totalItems, 
        { 
            "products" : (Date.now() - currentDate).toString(),
            "user" : JSON.stringify(this._userService)
        });        
    }

    public onAfterAddingFile(fileItem: FileItem): void {
        AppInsights.trackTrace("Aggiunto file" + fileItem.file.name);
    }
    public onBeforeUploadItem(fileItem: FileItem): void {
        AppInsights.startTrackEvent(fileItem.file.name);

        AppInsights.trackEvent("beginLoadFile", 
            { "user" : JSON.stringify(this._userService) }, 
            { "duration" : this.stopUpload - this.startUpload, "loadCounter" : this.loadFiles }
        ); 

        this.loadFiles +=1;
        this.startUpload = Date.now();
    }
    public onCompleteItem(fileItem: FileItem): void {
        this.stopUpload = Date.now();
        AppInsights.trackEvent(fileItem.file.name);
        
        AppInsights.trackEvent("loadFileComplete", 
            { "user" : JSON.stringify(this._userService) }, 
            { "duration" : this.stopUpload - this.startUpload, "loadCounter" : this.loadFiles }
        ); 

        AppInsights.trackMetric("loadFileCounter", 1, this.loadFiles, null, null, 
        { 
            "duration" : (this.stopUpload - this.startUpload).toString(), 
            "loadCounter" : this.loadFiles.toString()
        });
   }
    public onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): void {
        AppInsights.trackException(new Error(status + response), null, 
            { filename : item.file.name, size : item.file.size},
            null, 
            AI.SeverityLevel.Critical // Solo in questo metodo è possibile specificare la SeverityLevel
        );
    }

    public loadError() {
        AppInsights.startTrackEvent("SimulazioneErrore");
        this.loadErrors +=1;
        
        this.dialog.open(HttpSpinnerComponent);
        let startDate = Date.now();

        var skip: number = this.rowsOnPage * (this.activePage - 1);
        this._productService.getProductsError()
            .subscribe(
            products => {
                let stopDate = Date.now();
                this.products = products;                
                this.dialog.closeAll();
                
                let differenceDate = stopDate - startDate;
                AppInsights.trackEvent("loadProductErrorEvent", 
                    { "user" : JSON.stringify(this._userService) }, 
                    { "duration" : differenceDate }
                );

                AppInsights.stopTrackEvent("SimulazioneErrore");
            },
            error => {
                this.errorMessage = <any>error;
                this.counterException += 1;
                AppInsights.trackException(new Error(this.errorMessage + this.counterException.toString()), null, null, null, AI.SeverityLevel.Error);                 
                AppInsights.stopTrackEvent("SimulazioneErrore");
                this.dialog.closeAll();
            });
    }
}
