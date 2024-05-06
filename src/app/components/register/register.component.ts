import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  
  postObj:any=
  {
    userName:'',
    password:'',
    name:'',
    company:''
  }
  hideMain:any;
  hideSub:any;
  password:any;
  constructor(private router:Router,private employee:EmployeeService) { }

  ngOnInit(): void {
    this.hideMain=true;
    this.hideSub=true;

  }

  signIn()
  {
      this.router.navigateByUrl("/");
  }
  register()
  {
    if(this.password==this.postObj['password'])
      {
        console.log(this.postObj);
        this.employee.registerEmployee(this.postObj).subscribe(
          (response)=>
            {
                alert(response['message']);
            },
            (error)=>
              {
                alert(error['error']);
              }
        )
      }
      else
      {
        alert("Passwords do not match");
      }
  }
  hideMainPassword()
  {
      this.hideMain=!this.hideMain;
  }
  hideSubPassword()
  {
      this.hideSub=!this.hideSub;
  }


}
