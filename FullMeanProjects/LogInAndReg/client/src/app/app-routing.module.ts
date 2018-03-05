import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './User/login/login.component';
import { DashboardComponent } from './User/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    // children: []
  },
  {
    path: 'dashboard',
    // pathMatch: 'full',
    component: DashboardComponent,
    children: []
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
