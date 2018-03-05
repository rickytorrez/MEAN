import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AddnoteComponent } from './addnote/addnote.component';
import { DisplaynotesComponent } from './displaynotes/displaynotes.component';

import { NoteService } from './server/controllers/note.service';
import { DisplaynoteslsComponent } from './displaynotesls/displaynotesls.component';


@NgModule({
  declarations: [
    AppComponent,
    AddnoteComponent,
    DisplaynotesComponent,
    DisplaynoteslsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
