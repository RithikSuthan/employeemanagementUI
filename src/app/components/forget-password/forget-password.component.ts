import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.scss']
})
export class ForgetPasswordComponent implements OnInit {

  constructor(private service:EmployeeService,private router:Router) { }
  changePassword:any;
  confirmPassword:any;
  postObj:any={
    userName:'',
    password:''
  }
  resetPostObj()
  {
    this.postObj={
      userName:'',
      pasword:''
    }
  }
  ngOnInit(): void {
    this.changePassword=true;
    this.resetPostObj();
  }
  changePasswordFunction()
  {
      this.router.navigateByUrl("/");
  }
  changePasswordValue()
  {
    if(this.postObj.password===this.confirmPassword)
      {
          try
          {
              this.service.resetPassword(this.postObj).subscribe(
                (response)=>{
                  alert(response['message']);
                  if(response['message']==="Password Changed Successfully")
                    {
                      this.changePasswordFunction();
                    }
                }
              )
          }
          catch(error)
          {
            console.error(error);
          }
      }
      else
      {
        alert("Password don't match");
      }
  }
}
