import { Injectable } from '@angular/core';
import { HttpClientModule , HttpClient , HttpHeaders } from '@angular/common/http';
import { User } from '../Model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  //Using Depedency Injection We have to inject the HttpClient Class as a Module in
  //the service
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  baseURL: string = "http://localhost:3000/users";
  constructor(private http: HttpClient) {

  }
  //Get All the Users
  getAllUsers() {
    return this.http.get<User[]>(this.baseURL);
  }
  addUser(user) { 
    return this.http.post<User>(this.baseURL,JSON.stringify(user),this.httpOptions)
 }
  deleteUser(user){
    return this.http.delete(this.baseURL , )
  }
}