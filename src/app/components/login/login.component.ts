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
    userName:'',
    password:''
  }

  ngOnInit(): void {
  this.hide=true;
  localStorage.removeItem('userName');
  localStorage.removeItem('company');
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
            alert(response['message']);
            localStorage.setItem('userName',response['userName']);
            localStorage.setItem('name',response['name']);
            localStorage.setItem('company',response['company']);
            this.router.navigateByUrl("/home");
          }
          else if(response.message =="Login Successful")
            {
              alert(response['message']);
              this.router.navigateByUrl("/user");
            }
          else
          {
            alert(response['message']);
          }
      },
      (error)=>
        {
          console.log(error);
          alert(error['error']);
        }
    )
  }
}
