import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Player } from './player';

// import "rxjs";
// import 'rxjs/add/operator/map';

@Injectable()
export class PlayerService {

  constructor(
    private _http: Http
  ) { }

  create(newPlayer: Player){
    return this._http.post("/players", newPlayer)
  }

  all(){
    return this._http.get("/players")
  }
}
