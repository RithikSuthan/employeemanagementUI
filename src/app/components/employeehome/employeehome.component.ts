import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-employeehome',
  templateUrl: './employeehome.component.html',
  styleUrls: ['./employeehome.component.scss']
})
export class EmployeehomeComponent implements OnInit {

  company:any;
  employeeName:any;
  leaveModel:any;
  taskModel:any;
  changePassword:any;
  confirmPassword:any;
  constructor(private router:Router,private employeeService:EmployeeService) { }

  postObj:any={
    userName:localStorage.getItem('userName'),
    password:''
  }
  resetPostObj()
  {
    this.postObj={
      userName:localStorage.getItem('userName'),
      password:''
    }
    this.confirmPassword="";
  }
  ngOnInit(): void {
    this.company=localStorage.getItem("company");
    this.employeeName=localStorage.getItem("name");
    this.leaveModel=false;
    this.taskModel=true;
    this.changePassword=false;
    this.resetPostObj();
  }
  signOut=()=>
    {
      localStorage.removeItem("company");
      localStorage.removeItem("uuid");
      localStorage.removeItem("name");
      localStorage.removeItem("userName");
      localStorage.removeItem("creator");
      this.router.navigateByUrl("/");
    }
  taskPop=()=>
    {
      this.leaveModel=!this.leaveModel;
      this.taskModel=!this.taskModel;
      this.changePassword=false;
    }
    closeLeave()
    {
      this.leaveModel=false;
      this.taskModel=true;
    }
    changePasswordFunction()
    {
      this.changePassword=!this.changePassword;
    }
    changePasswordValue()
    {
        if(this.confirmPassword==this.postObj.password)
          {
              try
              {
                  this.employeeService.changePassword(this.postObj).subscribe(
                    (response)=>
                      {
                          alert(response['message']);
                      }
                      
                  )    
                  this.changePassword=!this.changePassword;              
              }
              catch(error)
              {
                console.error(error);
              }
          }
          else
          {
            alert("Password Not Match");
          }

    }
}
