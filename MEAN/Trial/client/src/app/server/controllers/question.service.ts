import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../models/question';

@Injectable()
export class QuestionService {

  constructor(
    private _http: Http
  ) { }

  showAll(callback){
    this._http.get('/question').subscribe(
      res => callback(res.json()),
      err => console.log(err)
    );
  }

  createQuestion(newQuestion: Question, callback){
    console.log("Hitting the service", newQuestion);  
    this._http.post('/question/new', newQuestion).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    )
  }

  showOne(id: string, callback){
    console.log("id is hereee ", id);
    this._http.get(`/question/${id}`).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    )
  }

  likePost(id: string, callback){
    this._http.put(`/answer/like/${id}`, {}).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    )
  }
}
