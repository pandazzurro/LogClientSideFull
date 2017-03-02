import { Component, OnInit } from '@angular/core';
import { JSLoggerService } from '../jslogger.service';
import { MdDialog } from '@angular/material';
import { ProductService } from '../product.service';
import { Product } from '../Models/Product';
import { PaginationData } from '../Models/PaginationData';
import { HttpSpinnerComponent } from '../http-spinner/http-spinner.component';
import { FileDropDirective, FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';
import { UserService } from '../user.service';

@Component({
    selector: 'app-jsnlog',
    templateUrl: './jsnlog.component.html',
    styleUrls: ['./jsnlog.component.css']
})
export class JSNlogComponent implements OnInit {
    public products: PaginationData<Product> = new PaginationData<Product>(new Array<Product>() , 0);
    errorMessage: any;
    public rowsOnPage = 5;
    public activePage = 1;
    public startUpload : number;
    public stopUpload : number;
    
    public uploader: FileUploader;
    public hasBaseDropZoneOver: boolean = false;
    public hasAnotherDropZoneOver: boolean = false;

    constructor(private log: JSLoggerService, private _productService: ProductService, private _userService: UserService,  public dialog: MdDialog) {
        this.uploader = new FileUploader({ url: "/api/upload", disableMultipart: false });
        this.uploader.onAfterAddingFile = this.onAfterAddingFile.bind(this);
        this.uploader.onBeforeUploadItem = this.onBeforeUploadItem.bind(this);
        this.uploader.onErrorItem = this.onErrorItem.bind(this);
        this.uploader.onCompleteItem = this.onCompleteItem.bind(this);
        this.log.Debug({ msg: "Visita del componente JSNLog", user : this._userService}); 
    }

    ngOnInit() {
        
    }

    public getProducts() {
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
                this.log.Debug({ 
                    msg: "Caricamento dati in " + differenceDate + " ms" ,
                    user : this._userService,                    
                    userAgent : window.navigator.userAgent,
                    route : window.location.pathname
                });    
            },
            error => {
                this.errorMessage = <any>error;
                this.log.Error(this.errorMessage);
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
        
        this.log.Info({ msg: "Caricamento pagina successiva", currentPage: this.activePage, user : this._userService});    
    }

    public onAfterAddingFile(fileItem: FileItem): void {
        this.log.Debug({
            msg: "Adding File", 
            file: fileItem.file, 
            user : this._userService, 
            userAgent : window.navigator.userAgent,
            route : window.location.pathname                
        });
    }
    public onBeforeUploadItem(fileItem: FileItem): void {
        this.log.Debug({ 
            msg: "Before File", 
            file: fileItem.file, 
            user : this._userService,
            userAgent : window.navigator.userAgent,
            route : window.location.pathname    
        });
        this.startUpload = Date.now();
    }
    public onCompleteItem(fileItem: FileItem): void {
        this.stopUpload = Date.now();
        this.log.Debug({ 
            msg: "File caricato in " + (this.stopUpload - this.startUpload) + " ms", 
            file: fileItem.file, 
            user : this._userService,
            userAgent : window.navigator.userAgent,
            route : window.location.pathname
         });
    }
    public onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): void {
        this.log.Error({ msg: "Error File", 
            file: item.file, 
            user : this._userService,
            userAgent : window.navigator.userAgent,
            route : window.location.pathname
        });
    }

    public loadError() {
        this.log.Error({ 
            msg: "Simulazione Errore", 
            user : this._userService,
            userAgent : window.navigator.userAgent,
            route : window.location.pathname
        });
        
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
                this.log.Error(this.errorMessage);
                this.dialog.closeAll();
            });
    }
}