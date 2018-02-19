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

  delete(id: string){
    return this._http.delete("/players/remove/"+ id)
  }

  update(player){
    console.log("status update @parent component ");
    return this._http.put("/players/" + player._id, player)
//   return this._http.put("/players/"+id);
  }
}
