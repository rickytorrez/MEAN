import { Component, OnInit } from '@angular/core';
import { UserService } from '../../server/controllers/user.service';
import { Router } from '@angular/router';
import { QuestionService } from '../../server/controllers/question.service';
import { User } from '../../server/models/user';
import { Question } from '../../server/models/question';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  currentUser: User = new User();
  questions: Question[];

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _questionService: QuestionService

  ) { }

  ngOnInit() {
    this.getQuestions();
    this.setCurrentUser(); 

    console.log(this.currentUser);
  }

  getQuestions(){
    console.log(this.questions);
    this._questionService.showAll((questions) => this.questions = questions);
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

  logout(){
    this._userService.logout(res => this._router.navigateByUrl('/'));
  }
}
