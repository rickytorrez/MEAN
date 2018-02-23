import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './user/login/login.component';
import { QuestionComponent } from './question/question.component';
import { ListComponent } from './question/list/list.component';
import { ShowComponent } from './question/show/show.component';
import { CreateComponent } from './question/create/create.component';
import { AnswerComponent } from './answer/answer.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'questions',
    component: ListComponent
  },
  {
    path: 'questions/:id',
    component: ShowComponent
  },
  {
    path: 'add',
    component: CreateComponent
  },
  {
    path: 'answers/:id',
    component: AnswerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
