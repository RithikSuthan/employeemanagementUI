import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';
import { environment } from 'src/environments/environment';


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
  otp:any;
  otpBox:any;
  otpVal:any;
  otpInpVal:any;
  newUser:any;
  version:any;
  constructor(private router:Router,private employee:EmployeeService) { }

  ngOnInit(): void {
    this.hideMain=true;
    this.hideSub=true;
    this.otp=true;
    this.otpBox=false;
    this.newUser=true;
    this.version=" Version "+environment.version;
  }
  otpChange()
  {
    if(this.otpVal==this.otpInpVal)
      {
        alert("Otp matched");
        this.otp=false;
      }
      else
      {
        alert("Otp is Not matching")
      }
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
                if(response['message']==="User saved successfully")
                  {
                    this.router.navigateByUrl("/");
                  }
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

  verify()
  {
    let postObj={
      send_to_email:this.postObj.userName,
      name:this.postObj.name
    }
    this.employee.sendOtp(postObj).subscribe(
      (response)=>
        {
          alert(response["message"]);
          this.otpVal=response["otp"];
          this.otpBox=true;
        },
        (error)=>
          {
            alert(error["error"]);
          }
    )
  }
  emailExist()
  {
    const email=this.postObj["userName"];
    this.employee.checkExistUser(email).subscribe(
      (response)=>{
          if(response["message"]=="This email Already exists")
            {
              alert("This email Already exists ,Try with another email");
            }
          else if(response["message"]=="New user")
            {
                this.newUser=false;
            }
      },
      (error)=>
        {
            alert(error["error"]);
        }
    );
  }
}
