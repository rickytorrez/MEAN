import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class OptionService {

  constructor(
    private _http: Http
  ) { }

  update(id: string, callback){
    this._http.put(`options/${id}/easy`, {}).subscribe(
      res => callback(res.json()),
      err => console.log(err)
    )
  }


}
