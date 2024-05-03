import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router:Router) { }

  hide:any;
  ngOnInit(): void {
  this.hide=true;
  }
  showPassword()
  {
    this.hide=!this.hide;
  }
  signUp()
  {
    this.router.navigateByUrl("/register"); 
  }
}
