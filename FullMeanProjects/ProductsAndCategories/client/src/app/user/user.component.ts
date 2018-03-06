import { Component, OnInit } from '@angular/core';
import { UserService } from '../server/controllers/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  private user : any;

  constructor(private _us: UserService) {                                       //Dependency injection

  }

  ngOnInit() {
    this.user = {
      email: "",                                                                // Initialize the user model instead of creating 
      password: ""                                                              // a model file
    };
  }

}
