import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  quickTask:any;
  employee_data:any;
  addTask={
    description:"",
    deadline:"",
    reportTo:"",
    email:localStorage.getItem("userName"),
    uuid:localStorage.getItem("uuid")
  }
  constructor(private employee:EmployeeService) { }

  ngOnInit(): void {
    this.quickTask=false;
    this.loadDashboard();
  }
  loadDashboard=()=>
    {
        try
        {
            this.employee.fetchTask(localStorage.getItem("uuid")).subscribe(
              (response)=>
                {
                    this.employee_data=response;
                    console.log(this.employee_data);
                }
            );
        }
        catch(error)
        {
          console.error(error);
        }
    }
  quickTaskModel()
  {
      this.quickTask=!this.quickTask;
  }
  add()
  {
      // console.log(this.addTask);
      try
      {
          this.employee.addTask(this.addTask).subscribe(
            (response)=>
              {
                // alert(response);
                this.ngOnInit();
              }
          )        
      }
      catch(error)
      {
        console.error(error);
      }
  }
  cancel()
  {
    this.quickTask=!this.quickTask;
  }
  }
  
  
  

