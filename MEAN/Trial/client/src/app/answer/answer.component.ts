import { Component, OnInit } from '@angular/core';
import { User } from '../server/models/user';
import { Question } from '../server/models/question';
import { UserService } from '../server/controllers/user.service';
import { Router } from '@angular/router';
import { QuestionService } from '../server/controllers/question.service';
import { AnswerService } from '../server/controllers/answer.service';
import { Answer } from '../server/models/answer';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {

  newAnswer: Answer = new Answer();
  currentUser: User = new User();
  errors: string [] = [];
  answer: Answer;
  question_id: string;
  subscription: Subscription;
  question: Question = new Question;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _questionService: QuestionService,
    private _answerService: AnswerService
  ) { 
    this.answer = new Answer;
    this._answerService = _answerService;
  }

  ngOnInit() {
    this.setCurrentUser()
  }

  setCurrentUser(){
    this._userService.getCurrentUser().subscribe(
      res=>{
        console.log("this is our user online: ", this.currentUser);
        if(this.currentUser._id === null){
          this._router.navigateByUrl('/');
        }
        return this.currentUser = res.json();
    });
  }

  createAnswer(question_id){
    this.errors = [];
    this._answerService.createAnswer(this.answer, question_id).subscribe(
      res => res.json(),
      error => console.log(error)
    )
  }

}
