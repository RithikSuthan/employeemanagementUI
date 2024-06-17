import { Component, OnInit,Input } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Input()employeeName:any;
  changePassword:any;
  confirmPassword:any;
  postObj:any={
    userName:localStorage.getItem('userName'),
    password:""
  }
  constructor(private router:Router,private employeeService:EmployeeService) { }

  ngOnInit(): void {
    const ele=document.getElementById("side");
    if(ele)
    {
        ele.style.display="none";
    }
    this.changePassword=false;
  }
  resetPassword()
  {
    this.postObj={
      email:localStorage.getItem('userName'),
      password:""
    }
  }
  signOut()
  {
    document.body.style.overflow="auto";
    localStorage.removeItem("userName");
    localStorage.removeItem("name");
    localStorage.removeItem("company");
    this.router.navigateByUrl("/");
  }
  onMouseEnter()
  {
    console.log("Camehere");
    const ele=document.getElementById("side");
    if(ele)
    {
        ele.style.display="block";
        document.body.style.overflow="hidden";
    }
  }
  onMouseLeave()
  {
    console.log("mouse leave");
    const ele=document.getElementById("side");
    if(ele)
    {
        ele.style.display="none";
        document.body.style.overflow="auto";
    }
  }
  taskPage()
  {
    this.router.navigateByUrl("/user");
  }
  changePasswordFunction()
  {
    this.changePassword=!this.changePassword;
  }
  changePasswordValue()
  {
      if(this.confirmPassword==this.postObj.password)
        {
            try
            {
                this.employeeService.resetPassword(this.postObj).subscribe(
                  (response)=>
                    {
                        alert(response['message']);
                        this.changePassword=!this.changePassword; 
                    }
                    
                )    
                             
            }
            catch(error)
            {
              console.error(error);
            }
        }
        else
        {
          alert("Password Not Match");
        }

  }
}
