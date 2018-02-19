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
    private _userService: UserService,
    private _router: Router,
    private _pollService: PollService
  ) { }

  ngOnInit() {
    this.setCurrentUser();
    this.getPolls();
  }

  setCurrentUser() {
    this.currentUser = this._userService.getCurrentUser();
    if(this.currentUser === null){
      this._router.navigateByUrl('/');
    }
  }

  getPolls() {
    this._pollService.index((polls) => this.polls = polls);
  }

  logout(){
    this._userService.logout(res => this._router.navigateByUrl('/'));
  }
}
