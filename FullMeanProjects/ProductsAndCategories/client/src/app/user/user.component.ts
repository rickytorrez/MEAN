import { Component, OnInit } from '@angular/core';
import { UserService } from '../server/controllers/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private user : any;                                                           // Used to create user
  private loggedIn : any;                                                       // Used to log users in

  constructor(private _us: UserService, private _router: Router) {              // Dependency injection

  }

  ngOnInit() {
    this.user = {
      email: "",                                                                // Initialize the user model instead of creating 
      password: ""                                                              // a model file
    };

    this.loggedIn = {
      email: "",                                                                // Initialize the user model instead of creating 
      password: ""                                                              // a model file
    };
  }

  register(){
    this._us.create(this.user, (data)=>{
      console.log(data);
      
      if(data.errors) {
        console.log(data.errors);
      } else{
          this._router.navigate(['/'])
      }
    });
  }

  login(){
    this._us.login(this.loggedIn, (data)=>{
      console.log(data);
      
      if(data.errors) {
        console.log(data.errors);
      } else {
        this._router.navigate(['/'])
      }
    });
  }



}
