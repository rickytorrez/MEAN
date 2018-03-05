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

  currentUser: User = null;

  constructor(
    private _userService: UserService,
    private _router: Router
  ) { }

  ngOnInit() {
    this.getUserInSession()
    console.log(this.currentUser)
  }

  getUserInSession(){
    this._userService.session().subscribe((res)=>{
      this.currentUser = res.json();
      if(this.currentUser._id == null){
        this._router.navigateByUrl('/')
      }
    })
  }

  logOut(){
    this._userService.logout().subscribe(res => {this.currentUser = null})
    this._router.navigateByUrl("/");
  }

}