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
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.company=localStorage.getItem("company");
    this.employeeName=localStorage.getItem("name");
    this.leaveModel=true;
  }
  signOut=()=>
    {
      this.router.navigateByUrl("/");
    }
  taskPop=()=>
    {
      this.leaveModel=!this.leaveModel;
    }
    closeLeave()
    {
      this.leaveModel=false;
    }
}
