import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { UserService } from './user.service'
import { PollService } from './poll.service'
import { OptionService } from './option.service'

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { PollListComponent } from './poll-list/poll-list.component';
import { PollNewComponent } from './poll-new/poll-new.component';
import { PollShowComponent } from './poll-show/poll-show.component';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PollListComponent,
    PollNewComponent,
    PollShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService,
    PollService,
    OptionService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
