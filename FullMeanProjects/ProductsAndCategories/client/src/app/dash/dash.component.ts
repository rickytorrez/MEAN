import { Component, OnInit } from '@angular/core';
import { UserService } from '../server/controllers/user.service';
import { Router } from '@angular/router';
import { ProductService } from '../server/controllers/product.service';
import { CategoryService } from '../server/controllers/category.service';
import { ProcatService } from '../server/controllers/procat.service';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  // Used to post into the database
  private category : any;
  private product : any;
  private procat : any;

  // Used to show queries from database
  private categories : any;
  private products : any;
  private procats : any;

  constructor(private _us : UserService, private _router : Router, private _ps : ProductService, private _cs : CategoryService, private _procat : ProcatService) { }

  ngOnInit() {
    this._us.session((data) => {                                        // Check session to see if there's a user logged in
      if(data.errors){
        this._router.navigate(['/register'])
      } 
    });

    this.category = {                                                   // Using this instead of front end model
      title: ""
    };

    this.product = {                                                    // Using this instead of front end model
      title: ""
    };

    this.procat = {                                                     // Using this instead of front end model
      category: "",
      product: ""
    };

    this._ps.all((data)=>{
      this.products = data;                                             // Assign a variable so you can loop through it 
    });

    this._cs.all((data)=>{
      this.categories = data;                                           // Assign a variable to loop through it on the html
    });

    this._procat.all((data) => {
      this.procats = data;
    })

  }

  createProduct(){
    this._ps.create(this.product, (data) => {
      if(data.errors){
        console.log(data.errors);
      } else {
        // this.products.push(data);
        this.product = {title: ""};
      }
    });
  }

  createCategory(){
    this._cs.create(this.category, (data) => {
      if(data.errors){
        console.log(data.errors);
      } else {
        // this.categories.push(data);
        this.category = {title: ""};
      }
    });
  }

  createProCat(){
    this._procat.create(this.procat, (data)=>{
      if(data.errors){
        console.log(data.errors);
      } else{
        // this.procats.push(data);

        this.procat = {
          category: "",
          product: ""
        };
      }
    });
  }

}
