import { Injectable } from '@angular/core';
import { Answer } from '../models/answer';
import { Http } from '@angular/http';

@Injectable()
export class AnswerService {


  constructor(
    private _http: Http
  ) { }

  createAnswer(answer: Answer, question_id){
    return this._http.post(`/answer/${question_id}`, answer)
  }
}


