import { Component, OnInit } from '@angular/core';
import { User } from '../../server/models/user';
import { UserService } from '../../server/controllers/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    newUser: User = new User();
    // loggedUser: User = new User();

    userLoggedIn : User;

    registrationErrors: string [] = [];
    loginErrors: string [] = [];
    
  constructor(
    private _userService: UserService,
    private _router: Router
  ) {
    this.userLoggedIn = new User;
   }

  ngOnInit() {
  }

  createUser(){
    this.registrationErrors = [];
    this._userService.createUser(this.newUser, (res) => {
      if(res.errors) {
        for (const key of Object.keys(res.errors)) {
          const error = res.errors[key];
          this.registrationErrors.push(error.message)
        }
      } else {
        this._router.navigateByUrl('/dashboard');
      }
    });
  }

  loginUser() {
    console.log("button at component" + this.userLoggedIn)
    this.loginErrors = [];
    this._userService.authenticate(this.userLoggedIn, (res) => {
      console.log(res);
      if (res.errors) {
        for (const key of Object.keys(res.errors)) {
          const error = res.errors[key];
          this.loginErrors.push(error.message);
        }
      } else {
        this._router.navigateByUrl('/dashboard');
      }
    });
  }
}
