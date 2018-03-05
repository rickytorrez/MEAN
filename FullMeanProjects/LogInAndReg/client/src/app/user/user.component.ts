import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router } from '@angular/router';
import { User } from '../server/models/user';
import { UserService } from '../server/controllers/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
currentUser: User = null;


  constructor(
    private _http: Http,
    private _router: Router,
    private _userService: UserService
  ) { }

  ngOnInit() {
    this.getUserSession();
  }

getUserSession(){
  this._userService.session().subscribe(
    res => {
      this.currentUser = res.json();
      if(this.currentUser == null){
        this._router.navigateByUrl('/')
      }
    }
  )
}




}

