import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  quickTask: boolean = false;
  loadManagers:any;
  employee_data: any = {
    tasks: []
  };
  addTask = {
    description: "",
    deadline: "",
    reportTo: "",
    email: localStorage.getItem("userName"),
    uuid: localStorage.getItem("uuid")
  };

  constructor(private employee:EmployeeService) { }

  ngOnInit(): void {
    this.loadDashboard();
    this.fetchManagers();
  }

  loadDashboard() {
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

  quickTaskModel() {
    this.quickTask = !this.quickTask;
  }

  add() {
    try
    {
        this.employee.addTask(this.addTask).subscribe(
          (response)=>
            {
              // alert(response);
              this.ngOnInit();
              this.quickTask=false;
            }
        )        
    }
    catch(error)
    {
      console.error(error);
    }
  }

  cancel() {
    this.quickTask = false;
  }

  drop(event: CdkDragDrop<any[]>, newStatus: string) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      const movedTask = event.container.data[event.currentIndex];
      movedTask.status = newStatus;
      this.updateTaskStatus(movedTask);
    }
  }
  updateTaskStatus(taskMove:any)
  {
      try
      {
          this.employee.updateStatus(taskMove).subscribe((response)=>
          {
            console.log(response);
            this.ngOnInit();
          })
      }
      catch(error)
      {
        console.error(error);
      }
  }

  getAssignedTasks() {
    if (this.employee_data && this.employee_data.tasks && this.employee_data.tasks.length > 0) {
      return this.employee_data.tasks.filter((task: { status: string; }) => task.status === 'assigned');
    }
    return [];
  }
  

  getTodoTasks() {
    if(this.employee_data && this.employee_data.tasks && this.employee_data.tasks.length > 0)
    return this.employee_data.tasks.filter((task: { status: string; }) => task.status === 'todo');
  return [];
  }

  getStageTasks() {
    if(this.employee_data && this.employee_data.tasks && this.employee_data.tasks.length > 0)
    return this.employee_data.tasks.filter((task: { status: string; }) => task.status === 'stage');
  return [];
  }

  getProductionTasks() {
    if(this.employee_data && this.employee_data.tasks && this.employee_data.tasks.length > 0)
    return this.employee_data.tasks.filter((task: { status: string; }) => task.status === 'production');
  return [];
  }
  refreshPage(event:any)
  {
    this.ngOnInit();
  }
  fetchManagers()
  {
      this.employee.fetchManagersEmployee().subscribe
      (
        (response)=>
          {
            this.loadManagers=[];
            for(let i=0;i<response.length;i++)
              {
                this.loadManagers.push(response[i]['employeeName']);
              }
            console.log(response);
          },
          (error)=>
            {
              console.log(error);
            }
      )
  }
}
