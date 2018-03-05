import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';
import { Poll } from '../poll';
import { UserService } from '../user.service';
import { PollService } from '../poll.service';

@Component({
  selector: 'app-poll-list',
  templateUrl: './poll-list.component.html',
  styleUrls: ['./poll-list.component.css']
})
export class PollListComponent implements OnInit {

  currentUser: User = new User();
  polls: Poll[];

  constructor(
    private _userService:   UserService,
    private _router:        Router,
    private _pollService:   PollService
  ) { }

  ngOnInit() {                                                            // Gets methods as page loads
    this.setCurrentUser();                                                //      Gets users in session
    this.getPolls();                                                      //      Gets polls
    console.log("my polls", this.polls);
  }

  destroyPoll(id: string){
    this._pollService.delete(id, (res)=>{
      if(res.status === true){
        this.getPolls();
      }
    });
  }


  setCurrentUser() {                                                      // Function to get user in session
    this.currentUser = this._userService.getCurrentUser();                // currentUser is set to equal the getCurrentUser method in the User Service 
    if(this.currentUser === null){                                        // If there is no user in session
      this._router.navigateByUrl('/');                                    // Route whoever is looking at the site to the home ('/') route
    }
  }

  getPolls() {
    console.log(this.polls);
    this._pollService.index((polls) => this.polls = polls);
  } 

  logout(){
    this._userService.logout(res => this._router.navigateByUrl('/'));
  }
}
