import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/Model/user';
import { Router} from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //Variable of type UserTable 
  users: User[];

  //DI
  constructor(private _userService: UserService , private router:Router) { }

  ngOnInit(): void {
    this._userService.getAllUsers()
      .subscribe(data => {
        this.users = data;
      });
   }
  // ngOnInit(): void{
  //   this._userService.getAllUsers().subscribe(data => {this.users = data;});
  // }

  addUser() {
    this.router.navigate(['adduser']);
  }
deleteUser(object : User)
{
  let index = this.users.indexOf(object);
  this.users.splice(index,1);
}
// editUser(object : User){
//   let index = this.users.indexOf(object);
//   this.users.
// }
  
}