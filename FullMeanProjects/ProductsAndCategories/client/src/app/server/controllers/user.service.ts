import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {

  constructor( private _http : HttpClient ) { 

  }

  create(user, cb){
    this._http.post("/users", user)
    .subscribe(data => cb(data));
  }

  login(user, cb){
    this._http.post("/login", user)
    .subscribe(data => cb(data));
  }

  session(){
    this._http.get("/session")
  }

}
