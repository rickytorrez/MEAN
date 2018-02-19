import { Component, OnInit } from '@angular/core';
import { Note } from '../server/models/note';
import { NoteService } from '../server/controllers/note.service';

@Component({
  selector: 'app-displaynotes',
  templateUrl: './displaynotes.component.html',
  styleUrls: ['./displaynotes.component.css']
})
export class DisplaynotesComponent implements OnInit {

  public notes: any;
  public note: Note;

  constructor(
    private _noteService: NoteService
  ) { }

  ngOnInit() {
    this._noteService.displayNotes().subscribe(
      notes => this.notes = notes.json(),
      error => console.log("Error on init" + error)
    )
  }

}
