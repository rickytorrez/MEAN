import { Component, OnInit } from '@angular/core';
import { User } from '../../server/models/user';
import { Question } from '../../server/models/question';
import { UserService } from '../../server/controllers/user.service';
import { Router } from '@angular/router';
import { QuestionService } from '../../server/controllers/question.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  question: Question = new Question();
  errors: string[] = [];
  currentUser: User = new User();

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _questionService: QuestionService
  ) { }

  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser(){
    this._userService.getCurrentUser().subscribe(
      res=>{
        console.log("this is our user online: ", this.currentUser);
        if(this.currentUser._id === null){
          this._router.navigateByUrl('/');
        }
    });
  }

  createQuestion(){
    this.errors= [];
    this._questionService.createQuestion(this.question, (question)=>{
      if(question.errors){
        for (const key of Object.keys(question.errors)){
          const error = question.errors[key];
          this.errors.push(error.message);
        } 
      } else {
        this._router.navigateByUrl('/questions');
      }
    })
  }
}
