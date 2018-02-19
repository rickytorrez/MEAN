import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Note } from '../models/note';


@Injectable()
export class NoteService {


  constructor(
    private _http: Http
  ) { }

  createNote(newNote: Note){
    console.log("button @ Noteservice" + newNote);
    return this._http.post('/notes', newNote)
  }

  displayNotes(){
    return this._http.get('/notes')
  }
}
