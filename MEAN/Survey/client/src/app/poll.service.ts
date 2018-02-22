import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Poll } from './poll';
import { NewPoll } from './new-poll';

@Injectable()
export class PollService {

  constructor(
    private _http: Http
  ) { }

  index(callback){
    this._http.get('/polls').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  create(newPoll: NewPoll, callback){
    this._http.post('/polls', newPoll).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  show(id:string, callback){                                      // id being passed
    this._http.get(`/polls/${id}`).subscribe(                     // get poll by id 
      res => callback(res.json()),                                // send back the data
      err => console.log(err)                                     
    );
  }

  delete(id:string, callback){                                    // id being passed
    this._http.delete(`/polls/${id}`).subscribe(                  // get poll by id 
      res => callback(res.json()),
      err => console.log(err) 
    );
  }
}
