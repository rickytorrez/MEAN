import { Injectable } from '@angular/core';
import { User } from './user';
import { Http } from '@angular/http';

@Injectable()
export class UserService {

  currentUser: User = null;

  constructor(
    private _http: Http
  ) { }

  getCurrentUser() {                                            // Communicates with poll list componenet to get user in service
    return this.currentUser;                                    //
  }

  create(newUser: User, callback){
    this._http.post('/users', newUser).subscribe(
      res => {
        const user = res.json();
        if(!user.errors){
          this.currentUser = user;
        }
        callback(user);
      },
      err => console.log(err)
    );
  }

  logout(callback) {
    this._http.delete('/users').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  session(callback) {
    this._http.get('/session').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }
}
