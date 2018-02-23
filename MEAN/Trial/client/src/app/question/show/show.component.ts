import { Component, OnInit } from '@angular/core';
import { UserService } from '../../server/controllers/user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../server/controllers/question.service';
import { User } from '../../server/models/user';
import { Question } from '../../server/models/question';
import { AnswerService } from '../../server/controllers/answer.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})

export class ShowComponent implements OnInit {

  question: Question = new Question();
  currentUser: User = new User();
  subscription: Subscription;
  question_id: string;
  answers;

  constructor(
    private _userService: UserService,
    private _router: Router,
    private _questionService: QuestionService,
    private _answerService: AnswerService,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.setCurrentUser()
    this._route.params.subscribe(params => this.question_id = params.id)
    this.getQuestion()
    
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

  
  getQuestion(){
    console.log("Q-ID: ", this.question_id )
    this._questionService.showOne(this.question_id, question => this.question = question);
  }

  likePost(like_id: string){
    this._questionService.likePost(like_id, res => this.getQuestion());
  }

  logout(){
    this._userService.logout(res => this._router.navigateByUrl('/'));
  }

}