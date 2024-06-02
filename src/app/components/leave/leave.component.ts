import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-leave',
  templateUrl: './leave.component.html',
  styleUrls: ['./leave.component.scss']
})
export class LeaveComponent implements OnInit {
  
  @Output() closeLeave=new EventEmitter();
  postObjModel=
  {
    leaveType:"",
    fromTime:"",
    fromDate:"",
    toTime:"",
    toDate:"",
    comments:"",
    email:localStorage.getItem("userName")
  }
  constructor(private service:EmployeeService) { }
  uuid:any;
  employeeData:any;
  ngOnInit(): void {
    this.uuid=localStorage.getItem("uuid");
    this.fetchEmployee();
  }
  fetchEmployee=()=>
  {
      try
      {
          this.service.editFetchEmployee(this.uuid).subscribe(
            (response)=>
              {
                this.employeeData=response;
                // console.log(response);
              }
          );
      }
      catch(error)
      {
          console.error(error);
      }
  }
  closeModel()
  {
      this.closeLeave.emit();
  }
  postObj=()=>
    {
      console.log(this.postObjModel);
      try
      {
        this.service.sendLeaveRequest(this.postObjModel).subscribe(
          (response)=>
            {
                console.log(response);
            }
        );
      }
      catch(error)
      {
        console.error(error);
      }
    }
}
