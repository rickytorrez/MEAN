import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  currentUser: User = null;

  constructor(
    private _http: Http
  ) { }

  getCurrentUser(){
    return this._http.get('/session');                  //Changed get method
  }

  create(newUser: User, callback){
    console.log("Login @User Service")
    this._http.post('/user', newUser).subscribe(
      res => {
        var user = res.json();
        if(!user.errors){
          this.currentUser = user;
        }
        callback(user);
      },
      err => console.log(err)
    );
  }

  logout(callback){
    this._http.delete('/user').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  session(callback){
    this._http.get('/session').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }
}
