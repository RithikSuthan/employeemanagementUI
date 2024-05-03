import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModel } from '@angular/forms';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router,private service:EmployeeService) { 
  }

  hide:any;

  postObj:any=
  {
    username:'',
    password:''
  }

  ngOnInit(): void {
  this.hide=true;
  }
  showPassword()
  {
    this.hide=!this.hide;
  }
  signUp()
  {
    this.router.navigateByUrl("/register"); 
  }
  onSubmit()
  {
    this.service.login(this.postObj).subscribe(
      (response)=>{
        console.log(response);
        if (response.message =="Login Successful")
          {
            this.router.navigateByUrl("/home");
          }
      },
      (error)=>
        {
          console.log(error);
        }
    )
  }
}
