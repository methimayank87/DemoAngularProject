import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { employeeComponent } from './components/Employee/employee.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { UserComponent } from './components/user/user.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';
import { LikeDislikeComponent } from './components/like-dislike/like-dislike.component';
import { from } from 'rxjs';
 
const routes: Routes = [
  {path: '' , component : HomeComponent} , 
  {path : 'contact' , component : ContactComponent} , 
  {path : 'emp' , component : employeeComponent},
  {path: 'emplist' , component : EmployeeListComponent},
  {path: 'reactiveform' , component:ReactiveFormComponent},
  {path: 'userdata' , component : UserComponent},
  {path: 'adduser' , component : AddUserComponent},
  {path: 'classdemo' , component : NgclassdemoComponent},
  {path: 'likedislike' , component: LikeDislikeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
