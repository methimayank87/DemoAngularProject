import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//import { NgOtpInputModule } from  'ng-otp-input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { employeeComponent} from './components/Employee/employee.component';
import { from } from 'rxjs';
import { GenderPipe } from './pipes/gender.pipe';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { UserComponent } from './components/user/user.component';
import { HttpClientModule } from '@angular/common/http';
import { AddUserComponent } from './components/add-user/add-user.component';
import { NgclassdemoComponent } from './components/ngclassdemo/ngclassdemo.component';
import { RouterModule } from '@angular/router';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { LikeDislikeComponent } from './components/like-dislike/like-dislike.component';
//import { DemoComponent } from './components/demo/demo.component';
//import { BindingsDemoComponent } from './components/bindings-demo/bindings-demo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    employeeComponent,
    GenderPipe,
    EmployeeListComponent,
    ReactiveFormComponent,
    UserComponent,
    AddUserComponent,
    NgclassdemoComponent,
    ParentComponent,
    ChildComponent,
    LikeDislikeComponent,
    //DemoComponent,
    //NgOtpInputModule
    //BindingsDemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
