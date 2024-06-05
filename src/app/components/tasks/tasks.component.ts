import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';

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

  constructor() { }

  ngOnInit(): void {
    this.loadDashboard();
  }

  loadDashboard() {
    // Simulating fetching data. Replace this with actual data fetching.
    this.employee_data = {
      tasks: [
        { id: 1, status: 'assigned', description: 'Task 1' },
        { id: 2, status: 'todo', description: 'Task 2' },
        { id: 3, status: 'stage', description: 'Task 3' },
        { id: 4, status: 'production', description: 'Task 4' }
      ]
    };
  }

  quickTaskModel() {
    this.quickTask = !this.quickTask;
  }

  add() {
    this.employee_data.tasks.push({ ...this.addTask, status: 'assigned' });
    this.quickTask = false;
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
      event.container.data[event.currentIndex].status = newStatus;
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
