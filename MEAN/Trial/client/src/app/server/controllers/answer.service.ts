import { Injectable } from '@angular/core';
import { Answer } from '../models/answer';
import { Http } from '@angular/http';

@Injectable()
export class AnswerService {


  constructor(
    private _http: Http
  ) { }

////******************* WORKING CODE ********************/////
//   createAnswer(answer: Answer, question_id){
//     return this._http.post(`/answer/${question_id}`, answer)
//   }
// }
////*************** END OF WORKING CODE ****************/////


  createAnswer(answer: Answer, question_id, ){
    console.log("Hitting the anser service ", question_id, answer)
    return this._http.post(`/answer/${question_id}`, answer);
  }
}
