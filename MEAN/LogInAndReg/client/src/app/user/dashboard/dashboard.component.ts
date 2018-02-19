import { Component, OnInit } from '@angular/core';
import { UserService } from '../../server/controllers/user.service';
import { Router } from '@angular/router';
import { User } from '../../server/models/user';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  currentUser: User;

  constructor(
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    this._userService.session((res) => {
      if (res.status === false){
        this._router.navigateByUrl('/');
      } else {
        this.currentUser = res;
      }
    });
  }

}
