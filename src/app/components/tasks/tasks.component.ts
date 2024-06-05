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
    return this.employee_data.tasks.filter((task: { status: string; }) => task.status === 'assigned');
  }

  getTodoTasks() {
    return this.employee_data.tasks.filter((task: { status: string; }) => task.status === 'todo');
  }

  getStageTasks() {
    return this.employee_data.tasks.filter((task: { status: string; }) => task.status === 'stage');
  }

  getProductionTasks() {
    return this.employee_data.tasks.filter((task: { status: string; }) => task.status === 'production');
  }
}
