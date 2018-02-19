import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  constructor(private _http: Http) { }

  createUser(newUser: User, callback){
    this._http.post('/users', newUser).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  authenticate(user: User, callback){
    this._http.post('/login', user).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  session(){
    return this._http.get('/session');
  }

  logout(){
    return this._http.delete('/users');
  }
}
