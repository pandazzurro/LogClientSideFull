import { Injectable } from '@angular/core';
import { Http, Response }          from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

import { Product } from './Models/Product';
import { PaginationData } from './Models/PaginationData';

@Injectable()
export class ProductService
{
    private productUrl = 'api/products';
    constructor(private http: Http)
    {

    }

    getProducts(skip : number, take : number): Observable<PaginationData<Product>>  {
        return this.http.get(this.productUrl + "/" + skip + "/" + take)
                        .map(this.createPaginationData)
                        .catch(this.handleError);
    }

    getProduct(productId: number) {

    }

    private createPaginationData(res: Response) {
        let body = res.json();
        var paginationData = new PaginationData<Product>(body.data, body.totalItems)
        return paginationData || { };
    }

    private handleError (error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || '';
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        console.error(errMsg);
        return Observable.throw(errMsg);
    }
}