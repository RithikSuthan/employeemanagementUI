import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  quickTask:any;
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
                alert(response);
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
  
  
  

