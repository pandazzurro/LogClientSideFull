import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Product } from './Models/Product';
import { PaginationData } from './Models/PaginationData';

@Injectable()
export class ProductServiceApplicationInsight
{
    private productUrl : string = 'api/products';
    constructor(private http: Http)
    {

    }

    getProducts(skip : number, take : number): Observable<PaginationData<Product>>  {
        return this.http.get(this.productUrl + "/" + skip + "/" + take)
                        .map(this.createPaginationData)
                        .catch(this.handleError);
    }

    getProductsError() {
        return this.http.get(this.productUrl + "error")
                        .map(this.createPaginationData)
                        .catch(this.handleError);
    }

    private createPaginationData(res: Response) {
        let body = res.json();
        var paginationData = new PaginationData<Product>(body.data, body.totalItems)
        return paginationData || { };
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            errMsg = error.statusText || '';
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }
}