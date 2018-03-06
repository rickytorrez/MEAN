import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClient } from 'selenium-webdriver/http';

import { UserComponent } from './user/user.component';
import { DashComponent } from './dash/dash.component';
import { ProductComponent } from './product/product.component';
import { CategoryComponent } from './category/category.component';
import { ProcatComponent } from './procat/procat.component';

import { UserService } from './server/controllers/user.service';
import { ProductService } from './server/controllers/product.service';
import { CategoryService } from './server/controllers/category.service';
import { ProcatService } from './server/controllers/procat.service';



@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    DashComponent,
    ProductComponent,
    CategoryComponent,
    ProcatComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    UserService,
    ProductService,
    CategoryService,
    ProcatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
