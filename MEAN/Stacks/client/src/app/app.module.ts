import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { LoginComponent } from './User/login/login.component';
import { DashboardComponent } from './User/dashboard/dashboard.component';
import { UserService } from './server/controllers/user.service';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { DisplayComponent } from './question/display/display.component';
import { CreateComponent } from './question/create/create.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    DashboardComponent,
    QuestionComponent,
    AnswerComponent,
    DisplayComponent,
    CreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    UserService         
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
