import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor( private _http : HttpClient ) {

  }

  create(product, cb){
    this._http.post('/products/new', product)
    .subscribe(data => cb(data));
  }

  all(cb){
    this._http.get('/products')
    .subscribe(data => cb(data));
  }
}
