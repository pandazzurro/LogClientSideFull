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
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { PaginationData } from './Models/PaginationData';
var ProductService = (function () {
    function ProductService(http) {
        this.http = http;
        this.productUrl = 'api/products';
    }
    ProductService.prototype.getProducts = function (skip, take) {
        return this.http.get(this.productUrl + "/" + skip + "/" + take)
            .map(this.createPaginationData)
            .catch(this.handleError);
    };
    ProductService.prototype.getProduct = function (productId) {
    };
    ProductService.prototype.createPaginationData = function (res) {
        debugger;
        var body = res.json();
        var paginationData = new PaginationData(body.data, body.totalItems);
        return paginationData || {};
    };
    ProductService.prototype.handleError = function (error) {
        var errMsg;
        if (error instanceof Response) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    };
    return ProductService;
}());
ProductService = __decorate([
    Injectable(),
    __metadata("design:paramtypes", [Http])
], ProductService);
export { ProductService };
//# sourceMappingURL=E:/Progetti/GitHub/LogClientSideFull/LogClientSide/src/app/product.service.js.map