import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable()
export class HttpService {
  constructor(private _http: HttpClient){
    // this.getTasks();
    this.showTask();
    
  }

  // getTasks(){
  //   let tempObservable = this._http.get('/tasks');
    // tempObservable.subscribe(data => console.log("Getting all of our tasks!", data));
  // }

  showTask(){
    let tempObservable = this._http.get('/tasks/5a7f62a7f084ce6738c87500');
    tempObservable.subscribe(data => console.log("Getting a single task!", data));
  }


}
