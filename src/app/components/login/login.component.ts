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
  forgetPassword:any;
  postObj:any=
  {
    userName:'',
    password:''
  }

  ngOnInit(): void {
  this.hide=true;
  localStorage.removeItem('userName');
  localStorage.removeItem('company');
  this.forgetPassword=false;
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
            localStorage.setItem('uuid',response['uuid']);
            localStorage.setItem('creator',response['creator']);
            this.router.navigateByUrl("/home");
          }
          else if(response.message =="Employee Login Success")
            {
              alert(response['message']);
              localStorage.setItem('userName',response['userName']);
              localStorage.setItem('name',response['name']);
              localStorage.setItem('company',response['company']);
              localStorage.setItem('uuid',response['uuid']);
              localStorage.setItem('creator',response['creator']);
              this.router.navigateByUrl("/user");
            }
          else
          {
            alert("Login Failed, Please Try Again");
          }
      },
      (error)=>
        {
          console.log(error);
          alert("Login Failed, Please Try Again");
        }
    )
  }
  forgetPasswordFunc()
  {
    this.forgetPassword=!this.forgetPassword;
  }
  ForgetPasswordValue()
  {
    try
              {
                  this.service.forgetPassword(this.postObj).subscribe(
                    (response)=>
                      {
                          alert(response['message']);
                      }
                      
                  )    
                  this.forgetPassword=!this.forgetPassword;             
              }
              catch(error)
              {
                console.error(error);
              }
  }
}
