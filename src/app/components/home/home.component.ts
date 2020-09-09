import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
Fname:string = "Mayank";
Lname:string = "Methi";
Age:number = 22;
salary : number = 50000;

  constructor() { }

  ngOnInit(): void {
  }

}
