import { Component, OnInit } from '@angular/core';
import { JSLoggerService } from '../jslogger.service';
import { MdSnackBar } from '@angular/material';
import { MdDialog } from '@angular/material';
import { ProductService } from '../product.service';
import { Product } from '../Models/Product';
import { HttpSpinnerComponent } from '../http-spinner/http-spinner.component';

@Component({
    selector: 'app-jsnlog',
    templateUrl: './jsnlog.component.html',
    styleUrls: ['./jsnlog.component.css']
})
export class JSNlogComponent implements OnInit {
    itemsTotal : number = 0;
    data : Product[];
    errorMessage : any;
    public rowsOnPage = 10;
    public activePage = 1;
    
    constructor(private _jsnlog: JSLoggerService, private _productService : ProductService, public snackBar: MdSnackBar, public dialog: MdDialog) {	    

    }

    ngOnInit() {
        this.getProducts();
    }
	
    getProducts(){
        this.dialog.open(HttpSpinnerComponent);

        var skip : number = this.rowsOnPage * (this.activePage - 1);        
        this._productService.getProducts(skip, this.rowsOnPage)
                   .subscribe(
                     products => {
                         this.data = products.data; 
                         this.itemsTotal = products.totalItems;  
                         this.dialog.closeAll();
                        },
                     error =>  this.errorMessage = <any>error);
    }

    public onPageChange(event) {
        this.rowsOnPage = event.rowsOnPage;
        this.activePage = event.activePage;
        this.getProducts();
    }

	coreDebug() {
        this._jsnlog.coreDebug("asp net core Debug");
        this.snackBar.open("asp net core Debug", "coreDebug", { duration: 2000});
    }

    coreInfo() {
        this._jsnlog.coreInfo("asp net core Info");
        this.snackBar.open("asp net core Info", "coreInfo", { duration: 2000});
    }

    coreError() {
        this._jsnlog.coreError("asp net core Error");
        this.snackBar.open("asp net core Error", "coreError", { duration: 2000});
    }	
}