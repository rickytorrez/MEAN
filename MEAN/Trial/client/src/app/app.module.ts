import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { QuestionComponent } from './question/question.component';
import { CreateComponent } from './question/create/create.component';
import { ListComponent } from './question/list/list.component';
import { UserService } from './server/controllers/user.service';
import { QuestionService } from './server/controllers/question.service';
import { AnswerService } from './server/controllers/answer.service';
import { LoginComponent } from './user/login/login.component';
import { ShowComponent } from './question/show/show.component';
import { AnswerComponent } from './answer/answer.component';
import { SearchQPipe } from './server/controllers/search.pipe';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    QuestionComponent,
    CreateComponent,
    ListComponent,
    LoginComponent,
    ShowComponent,
    AnswerComponent,
    SearchQPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    OrderModule
  ],
  providers: [
    UserService,
    QuestionService,
    AnswerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
