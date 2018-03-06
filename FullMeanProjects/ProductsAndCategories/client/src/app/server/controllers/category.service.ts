import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CategoryService {

  constructor( private _http : HttpClient ) { }

  create(category, cb){
    this._http.post('/categories/new', category)
    .subscribe(data => cb(data));
  }

  all(cb){
    this._http.get('/categories')
    .subscribe(data => cb(data));
  }

}
