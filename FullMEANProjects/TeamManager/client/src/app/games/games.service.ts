import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Player } from '../player';

@Injectable()
export class GamesService {
  // @Input() players;

  constructor(
    private _http: Http
  ) { }

  all(){
    return this._http.get("players")
  }
  
  // update(){
  //   console.log("working?")
  // }

}
