import { Component, OnInit } from '@angular/core';
import { User } from '../server/models/user';
import { Question } from '../server/models/question';
import { UserService } from '../server/controllers/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  currentUser: User = new User();
  questions: Question[];
  
  constructor(
    private _userService : UserService,
    private _router : Router
  ) { }

  ngOnInit() {
    this.setCurrentUser()
  }

  setCurrentUser(){
    console.log("this is our user online: ", this.currentUser);
    this._userService.getCurrentUser().subscribe(
      res=>{
        if(this.currentUser._id === null){
          this._router.navigateByUrl('/');
      }
    });
  }
}
