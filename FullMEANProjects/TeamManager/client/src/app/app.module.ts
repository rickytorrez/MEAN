import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { PlayerService } from './player.service';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { PlayerComponent } from './player/player.component';
import { AddPlayerComponent } from './player/add-player/add-player.component';


@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    AddPlayerComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [PlayerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
