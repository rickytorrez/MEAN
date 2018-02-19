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

  show(id:string, callback){
    this._http.get(`/polls/${id}`).subscribe(
      res => callback(res.json()),
      err => console.log(err) 
    );
  }

  delete(id:string, callback){
    this._http.delete(`/polls/${id}`).subscribe(
      res => callback(res.json()),
      err => console.log(err) 
    );
  }
}
