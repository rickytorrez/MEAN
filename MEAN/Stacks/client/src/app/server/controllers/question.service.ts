import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../models/question';


@Injectable()
export class QuestionService {


  constructor(
    private _http: Http
  ) { }

  createQuestion(newQuestion: Question){
    console.log("button @ QService" + newQuestion);
    return this._http.post('/question/new', newQuestion)
  }

  displayQuestions(){
    return this._http.get('/question')
  }

}
