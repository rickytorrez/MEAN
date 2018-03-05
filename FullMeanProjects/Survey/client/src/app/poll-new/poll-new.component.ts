import { Component, OnInit } from '@angular/core';
import { NewPoll } from '../new-poll';
import { PollService } from '../poll.service';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-poll-new',
  templateUrl: './poll-new.component.html',
  styleUrls: ['./poll-new.component.css']
})
export class PollNewComponent implements OnInit {

  newPoll: NewPoll = new NewPoll();
  errors: string[] = [];
  currentUser: User = new User();
  
  constructor(
    private _pollService: PollService,
    private _router: Router,
    private _userService: UserService

  ) { }

  ngOnInit() {
    this.setCurrentUser                                                   // Keeps/Puts a user in session
  }

  setCurrentUser() {                                                      // Function to get user in session
    this.currentUser = this._userService.getCurrentUser();                // currentUser is set to equal the getCurrentUser method in the User Service 
    if(this.currentUser === null){                                        // If there is no user in session
      this._router.navigateByUrl('/');                                    // Route whoever is looking at the site to the home ('/') route
    }
  }

  createPoll(){
    this.errors = [];
    if (this.newPoll.option1.option.length < 3 || 
        this.newPoll.option2.option.length < 3 ||
        this.newPoll.option3.option.length < 3 ||
        this.newPoll.option4.option.length < 3){
          this.errors.push('Options must be at least three characters.');
    }
    this._pollService.create(this.newPoll, (poll) =>{
      if(poll.errors){
        for (const key of Object.keys(poll.errors)){
          const error = poll.errors[key];
          this.errors.push(error.message);
        } 
      }else {
          this._router.navigateByUrl('/dashboard');
      }
    })
  }

}