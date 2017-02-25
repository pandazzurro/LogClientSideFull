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
import { JSLoggerService } from '../jslogger.service';
import { MdSnackBar } from '@angular/material';
import { MdDialog } from '@angular/material';
import { ProductService } from '../product.service';
import { HttpSpinnerComponent } from '../http-spinner/http-spinner.component';
var JSNlogComponent = (function () {
    function JSNlogComponent(_jsnlog, _productService, snackBar, dialog) {
        this._jsnlog = _jsnlog;
        this._productService = _productService;
        this.snackBar = snackBar;
        this.dialog = dialog;
        this.itemsTotal = 0;
        this.rowsOnPage = 10;
        this.activePage = 1;
    }
    JSNlogComponent.prototype.ngOnInit = function () {
        this.getProducts();
    };
    JSNlogComponent.prototype.getProducts = function () {
        var _this = this;
        debugger;
        this.dialog.open(HttpSpinnerComponent);
        var skip = this.rowsOnPage * (this.activePage - 1);
        this._productService.getProducts(skip, this.rowsOnPage)
            .subscribe(function (products) {
            _this.data = products.data;
            _this.itemsTotal = products.totalItems;
            _this.dialog.closeAll();
        }, function (error) { return _this.errorMessage = error; });
    };
    JSNlogComponent.prototype.onPageChange = function (event) {
        this.rowsOnPage = event.rowsOnPage;
        this.activePage = event.activePage;
        this.getProducts();
    };
    JSNlogComponent.prototype.coreDebug = function () {
        this._jsnlog.coreDebug("asp net core Debug");
        this.snackBar.open("asp net core Debug", "coreDebug", { duration: 2000 });
    };
    JSNlogComponent.prototype.coreInfo = function () {
        this._jsnlog.coreInfo("asp net core Info");
        this.snackBar.open("asp net core Info", "coreInfo", { duration: 2000 });
    };
    JSNlogComponent.prototype.coreError = function () {
        this._jsnlog.coreError("asp net core Error");
        this.snackBar.open("asp net core Error", "coreError", { duration: 2000 });
    };
    return JSNlogComponent;
}());
JSNlogComponent = __decorate([
    Component({
        selector: 'app-jsnlog',
        templateUrl: './jsnlog.component.html',
        styleUrls: ['./jsnlog.component.css']
    }),
    __metadata("design:paramtypes", [JSLoggerService, ProductService, MdSnackBar, MdDialog])
], JSNlogComponent);
export { JSNlogComponent };
//# sourceMappingURL=E:/Progetti/GitHub/LogClientSideFull/LogClientSide/src/app/jsnlog/jsnlog.component.js.map