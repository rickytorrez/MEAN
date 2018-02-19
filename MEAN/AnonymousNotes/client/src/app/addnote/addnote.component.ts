import { Component, OnInit } from '@angular/core';
import { NoteService } from '../server/controllers/note.service';
import { Note } from '../server/models/note';

@Component({
  selector: 'app-addnote',
  templateUrl: './addnote.component.html',
  styleUrls: ['./addnote.component.css']
})
export class AddnoteComponent implements OnInit {

  private _noteService: NoteService;
  private note: Note;

  constructor(
    _noteService:  NoteService
  ) { 
    this._noteService = _noteService;
    this.note = new Note();
  }

  ngOnInit() {
  }

  createNote(){
    console.log("button @ addnote comp" + this.note);
    this._noteService.createNote(this.note).subscribe(
      note => note.json(),
      error => console.log(error)
    )
    location.reload()
  }
}
