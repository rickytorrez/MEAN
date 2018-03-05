import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserService } from '../user.service';
import { PollService } from '../poll.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { Poll } from '../poll';
import { OptionService } from '../option.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-poll-show',
  templateUrl: './poll-show.component.html',
  styleUrls: ['./poll-show.component.css']
})
export class PollShowComponent implements OnInit, OnDestroy {

  poll: Poll = new Poll();                                                // Instantiate the poll for it to receive likes
  currentUser: User = new User();
  poll_id: string;
  subscription: Subscription;

  constructor(
    private _userService: UserService,
    private _pollService: PollService,
    private _optionService: OptionService,
    private _route: ActivatedRoute,
    private _router: Router,
  ) { }

  ngOnInit() {
    this.setCurrentUser();
    this.subscription = this._route.params.subscribe(params => this.poll_id = params.id);
    // console.log(this.poll_id);
    this.getPoll();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  setCurrentUser() {                                                      // Function to get user in session
    this.currentUser = this._userService.getCurrentUser();                // currentUser is set to equal the getCurrentUser method in the User Service 
    if(this.currentUser === null){                                        // If there is no user in session
      this._router.navigateByUrl('/');                                    // Route whoever is looking at the site to the home ('/') route
    }
  }

  getPoll(){
    this._pollService.show(this.poll_id, poll => this.poll = poll);
  }

  update(option_id: string){
    this._optionService.update(option_id, res => this.getPoll());
  }
}
