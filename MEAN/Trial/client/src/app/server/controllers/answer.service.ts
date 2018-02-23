import { Injectable } from '@angular/core';
import { Answer } from '../models/answer';
import { Http } from '@angular/http';

@Injectable()
export class AnswerService {


  constructor(
    private _http: Http
  ) { }

  // create(id: string, newAnswer, callback){
  //   console.log("hitting the route at the service ", newAnswer)
  //   this._http.post(`/answer/${id}`, newAnswer).subscribe(
  //     res => callback(res.json()),
  //     err => console.log(err)
  //   );
  // }

  createAnswer(answer: Answer, question_id){
    return this._http.post(`/answer/${question_id}`, answer)
  }
}


