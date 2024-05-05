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
  }
  
  dashboardData=[]
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

}
