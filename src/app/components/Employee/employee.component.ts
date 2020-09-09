import {Component, OnInit} from '@angular/core'; 
import {Product} from 'src/app/Model/Products';
@Component({
    selector : 'app-emp' , 
    templateUrl : './employee.component.html',
    styleUrls: ['./employee.component.css'] 
})
export class employeeComponent implements OnInit{
    //Array Declaration
    Subjects : string[] = ["Angular" , "Java" , "Dotnet"];
    ShowFaculty : boolean = true;
    FacultyName : string = "Rashmi";
     employees: any[] = [
         {
           code: 'emp101', name: 'Rashmi', gender: 'Female',
           annualSalary: 5500, dateOfBirth: '05/16/1988'
         },
         {
           code: 'emp101', name: 'Nisha', gender: 'Female',
           annualSalary: 5500, dateOfBirth: '05/16/1988'
         },
         {
           code: 'emp101', name: 'Abhay', gender: 'Male',
           annualSalary: 5500, dateOfBirth: '05/16/1988'
         }
       ];
    products:Product[] = [
        {id:101 , name : "note8" , cost: 20000 , category : "Phones"} , 
        {id:102 , name : "oneplus6t" , cost : 42000 , category :"Phones"}
    ];
    myFunction(){
        alert("You clicked me");
    }
    deleteProd(id : number){
        alert('the product to be deleted' + id);
    }
    editProd(id:number , name : string)
    {
        alert('Product to be edited is' + id + name);
    }
    //employees :any[] = [];
    ngOnInit(): void {
    }  
}