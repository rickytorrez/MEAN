import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { HttpClient } from 'selenium-webdriver/http';

@Injectable()
export class ProcatService {

  constructor( private _http : HttpClient ) {

  }

  create(procat, cb){
    this._http.post("/procats/new", procat)
    .subscribe(data=>cb(data));
  }

  all(cb){
    this._http.get("/procats")
    .subscribe(data=>cb(data));
  }

}