import { Component, OnInit,ChangeDetectorRef } from '@angular/core';
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
  loadManagerEmployees:any;
  backupManagerTask:any;
  minDateTime: any;
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

  constructor(private employee:EmployeeService
    ,private cdr:ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadDashboard();
    this.fetchManagers();
    this.setMinDateTime();
  }
  dropDown(event:any)
  {
    if(event.target.value ==="")
    {
        this.employee_data.tasks=this.backupManagerTask;
    }
    else
    {
      for(let i=0;i<this.loadManagerEmployees.length;i++)
        {
          if (this.loadManagerEmployees[i].employeeName===event.target.value)
            {
              this.employee_data.tasks=[]
              console.log(this.employee_data);
              // alert("emptied");
              for(let j=0;j<this.loadManagerEmployees[i].tasks.length;j++)
                {
                  this.employee_data.tasks.push(this.loadManagerEmployees[i].tasks[j]);
                }
                console.log(this.employee_data);
                this.cdr.detectChanges();
            }
        }
    }
    
  }
fetchManagerEmployee()
{
  try
      {
          this.employee.managerEmployee(localStorage.getItem("uuid")).subscribe(
            (response)=>
              {
                  this.loadManagerEmployees=response;
                  console.log(this.loadManagerEmployees);
              }
          );
      }
      catch(error)
      {
        console.error(error);
      }
}
  loadDashboard() {
      try
      {
          this.employee.fetchTask(localStorage.getItem("uuid")).subscribe(
            (response)=>
              {
                  this.employee_data=response;
                  this.backupManagerTask=response.tasks;
                  console.log(this.employee_data);
                  if (this.employee_data['position']==='Manager' || this.employee_data['position']==='HR' ||this.employee_data['position']==='Team Leader' )
                    {
                      this.fetchManagerEmployee();
                    }
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
            this.loadManagers=[""];
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
  setMinDateTime(): void {
    const now = new Date();
    const year = now.getFullYear();
    const month = ('0' + (now.getMonth() + 1)).slice(-2);
    const day = ('0' + now.getDate()).slice(-2);
    const hours = ('0' + now.getHours()).slice(-2);
    const minutes = ('0' + now.getMinutes()).slice(-2);
    this.minDateTime = `${year}-${month}-${day}T${hours}:${minutes}`;
  }
}
