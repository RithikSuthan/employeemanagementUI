import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor(private employee:EmployeeService) { }

  ngOnInit(): void {
    this.fetchData();
    this.fetchManagers();
    this.popAddModle=true;
  }
  
  dashboardData=[];
  loadManagers=[];
  popAddModle:any;

  postObj={
    employeeName:'',
    email:'',
    phoneNumber:'',
    profileImage:'',
    reportsTo:'',
    position:''
  }

  fetchManagers()
  {
      this.employee.fetchManagers().subscribe
      (
        (response)=>
          {
            this.loadManagers=response;
            console.log(response);
          },
          (error)=>
            {
              console.log(error);
            }
      )
  }
  fetchData()
  {
      this.employee.fetchEmployees().subscribe
      (
        (response)=>
          {
              // console.log(response);
              this.dashboardData=response;
              console.log(this.dashboardData);
          },
          (error)=>
            {
                console.log(error);
            }
      )
  }
addModel()
{
    this.popAddModle=!this.popAddModle;
}
close()
{
  this.popAddModle=!this.popAddModle;
}
addEmployee()
{
    this.employee.addEmployee(this.postObj).subscribe(
    (respose)=>{
        console.log(respose);
    },
    (error)=>
    {
      console.log(error);
    }
    )
}
}
