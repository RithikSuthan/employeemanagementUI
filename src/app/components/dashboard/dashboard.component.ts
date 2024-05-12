import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  dashboardData=[];
  loadManagers=[];
  roles=['Software Developer','Software tester','Dev OPS','Data Analyst','HR','Manager','Team Leader']
  popAddModle:any;
  popEditModel:any;
  idModel:any;
  idUUID:any;

  postObj={
    employeeName:'',
    email:'',
    phoneNumber:'',
    profileImage:'',
    reportsTo:'',
    position:'',
    company:localStorage.getItem('company'),
    creator:localStorage.getItem('name')
  }
  editObj={
    employeeName:'',
    email:'',
    phoneNumber:'',
    profileImage:'',
    reportsTo:'',
    position:'',
    company:localStorage.getItem('company'),
    creator:localStorage.getItem('name')
  }

  constructor(private employee:EmployeeService) { }

  ngOnInit(): void {
    this.fetchData();
    this.fetchManagers();
    this.popAddModle=false;
    this.popEditModel=false;
    this.idModel=false;
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
    document.body.style.overflow='hidden';
}
close()
{
  this.popAddModle=!this.popAddModle;
  document.body.style.overflow='auto';
}
addEmployee()
{
    this.employee.addEmployee(this.postObj).subscribe(
    (respose)=>{
        console.log(respose);
        alert(respose['message']);
        setTimeout(()=>
          {
              this.ngOnInit();
          },5000)
    },
    (error)=>
    {
      console.log(error);
      alert(error['error']);
    }
    )
}
delete(uuid:any)
{
  this.employee.deleteEmployee(uuid).subscribe(
    (respose)=>
      {
          console.log(respose);
          alert(respose['message']);
          setTimeout(()=>
            {
                this.ngOnInit();
            },5000)
      },
      (error)=>
        {
            console.log(error);
            alert(error['error']);
        }
  )

}

closeEdit()
{
  this.popEditModel=!this.popEditModel;
  document.body.style.overflow='auto';
}
editFetchEmployee(uuid:any)
{
    this.employee.editFetchEmployee(uuid).subscribe(
      (response)=>
        {
          console.log(response);
          this.popEditModel=true;
          document.body.style.overflow="hidden";
          this.editObj=response;
          
        },
        (error)=>
          {
            console.log(error);
          }
    )
}
editEmployee()
{
    this.employee.editEmployee(this.editObj).subscribe(
      (response)=>
        {
            alert(response['message']);
              setTimeout(()=>
  {
      this.ngOnInit();
  },5000)
        },
        (error)=>
          {
              alert(error['error']);
          }
    ) 
}
checkExistEmployee()
{
  const email=this.postObj["email"];
  this.employee.checkExistUser(email).subscribe(
    (response)=>{
        if(response["message"]=="This email Already exists")
          {
            alert(response["message"]);
            this.postObj["email"]="";
          }
    },
    (error)=>
      {
          alert(error["error"]);
      }
  ); 
}
generateId(uuid:any)
{
  this.idModel=true;
  this.idUUID=uuid;
  document.body.style.overflow='hidden';
}
close1()
{
  this.idModel=false;
  document.body.style.overflow='auto';
}
}
