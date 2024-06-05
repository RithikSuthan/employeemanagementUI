import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.company=localStorage.getItem("company");
    this.employeeName=localStorage.getItem("name");
    this.leaveModel=false;
    this.taskModel=true;
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
    }
    closeLeave()
    {
      this.leaveModel=false;
      this.taskModel=true;
    }
}
