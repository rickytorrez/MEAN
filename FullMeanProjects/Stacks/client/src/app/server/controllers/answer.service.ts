import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Answer } from '../models/answer';

@Injectable()
export class AnswerService {

  constructor(
    private _http: Http
  ) { }


}
