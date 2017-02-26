import { Component, OnInit } from '@angular/core';
import { JSLoggerService } from '../jslogger.service';
import { MdSnackBar } from '@angular/material';
import { MdDialog } from '@angular/material';
import { ProductService } from '../product.service';
import { Product } from '../Models/Product';
import { PaginationData } from '../Models/PaginationData';
import { HttpSpinnerComponent } from '../http-spinner/http-spinner.component';
import { FileDropDirective, FileUploader, FileItem, ParsedResponseHeaders } from 'ng2-file-upload';


@Component({
    selector: 'app-jsnlog',
    templateUrl: './jsnlog.component.html',
    styleUrls: ['./jsnlog.component.css']
})
export class JSNlogComponent implements OnInit {
    public products: PaginationData<Product> = new PaginationData<Product>(new Array<Product>() , 0);
    errorMessage: any;
    public rowsOnPage = 10;
    public activePage = 1;
    
    public uploader: FileUploader;
    public hasBaseDropZoneOver: boolean = false;
    public hasAnotherDropZoneOver: boolean = false;

    constructor(private log: JSLoggerService, private _productService: ProductService, public snackBar: MdSnackBar, public dialog: MdDialog) {
        this.uploader = new FileUploader({ url: "/api/upload", disableMultipart: false });
        this.uploader.onAfterAddingFile = this.onAfterAddingFile;
        this.uploader.onBeforeUploadItem = this.onBeforeUploadItem;
        this.uploader.onErrorItem = this.onErrorItem;
        this.uploader.onCompleteItem = this.onCompleteItem;
    }

    ngOnInit() {
        this.getProducts();
    }

    getProducts() {
        this.dialog.open(HttpSpinnerComponent);

        var skip: number = this.rowsOnPage * (this.activePage - 1);
        this._productService.getProducts(skip, this.rowsOnPage)
            .subscribe(
            products => {
                this.products = products;                
                this.dialog.closeAll();
            },
            error => this.errorMessage = <any>error);
    }

    public onPageChange(event) {
        this.rowsOnPage = event.rowsOnPage;
        this.activePage = event.activePage;
        this.getProducts();
    }

    public fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    public fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
    }

    public onAfterAddingFile(fileItem: FileItem): void {
        debugger
        this.log.Debug({ msg: "Adding File", file: fileItem.file });
    }
    public onBeforeUploadItem(fileItem: FileItem): void {
        debugger
        this.log.Debug({ msg: "Before File", file: fileItem.file });
    }
    public onCompleteItem(fileItem: FileItem): void {
        debugger
        this.log.Debug({ msg: "Complete File", file: fileItem.file });
    }
    public onErrorItem(item: FileItem, response: string, status: number, headers: ParsedResponseHeaders): void {
        debugger
        this.log.Debug({ msg: "Error File", file: item.file });
    }

    public coreDebug() {
        this.log.Debug("asp net core Debug");
        this.snackBar.open("asp net core Debug", "coreDebug", { duration: 2000 });
    }

    public coreInfo() {
        this.log.Info("asp net core Info");
        this.snackBar.open("asp net core Info", "coreInfo", { duration: 2000 });
    }

    public coreError() {
        this.log.Error("asp net core Error");
        this.snackBar.open("asp net core Error", "coreError", { duration: 2000 });
    }
}